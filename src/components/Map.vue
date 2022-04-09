<template>
  <div id="hex-map" class="map">
    <!-- <h1> This is the Map </h1> -->
    <VueDeckgl
        class="deck-map"
        :layers="layers"
        :viewState="viewState"
        @click="handleClick"
        @view-state-change="handleViewStateChange"
        width="70vw"
        height="90vh"
        ref="deckgl"
    >
    </VueDeckgl>
    <div id="map" ref="map"></div>
    <el-popover
      placement="right"
      width="400"
      trigger="click"
      class="control-panel">
        <div class="block">
          <span class="demonstration">Opacity</span>
          <el-slider style="width:200px;" v-model="opacity" :width="300" :min="0" :max="1" :step="0.01"></el-slider>
        </div>
        <el-divider></el-divider>
        <p class="demonstration">POI Type</p>
        <el-radio-group v-model="checkedPOITypes">
          <el-radio v-for="item in poi_types" :label="item" :key="item">{{item}}</el-radio>
        </el-radio-group>
        <br>
        <el-button type="primary" icon="el-icon-delete" @click="clearCatchment">Clear Catchments</el-button>
        <el-divider></el-divider>

        <!-- <el-checkbox-group v-model="checkedDemographicTypes" @change="handleCheckedDemographicChange">
          <el-checkbox v-for="item in demographic_types" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group> -->
        <p class="demonstration">Demographic Groups</p>
        <el-cascader v-model="checkedDemographicTypes" :options="options"></el-cascader>
        <el-divider></el-divider>
        <p class="demonstration">Time of Day</p>
        <el-radio-group v-model="time_of_day">
          <el-radio-button v-for="item in time_types" :label="item" :key="item">{{item}}</el-radio-button>
        </el-radio-group>
          <!-- <div>
            <label for="color">Color Inversion</label>
            <input id="color" type="checkbox" name="color" @change="update_layers">
            <span id="color-value"></span>    
          </div>   -->
      <el-button slot="reference">Control Panel</el-button>
    </el-popover>
</div>
</template>

<script>
import VueDeckgl from "./VueDeckgl";
import { ScatterplotLayer, IconLayer, PolygonLayer } from '@deck.gl/layers';
import {H3HexagonLayer} from '@deck.gl/geo-layers';
import mapboxgl from 'mapbox-gl';
import { mapState } from 'vuex';
import FEProxy from '../utils/FEProxy';
import * as h3 from 'h3-js';
import { UpdatePack } from '../utils/UpdatePack';
// import structuredClone from '@ungap/structured-clone';
const MAP_STYLE = 'mapbox://styles/mapbox/streets-v11';


export default {
    name: "Map",
    components: {
      VueDeckgl
    },
    props: {
      poi_types: {
        type: Array,
        require: true,
      },
      demographic_types: {
        type: Array,
        require: true,
      },
      time_types: {
        type: Array,
        require: true,
      },
    },
    data() {
        return {
            ICON_MAPPING: {
              marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
            },
            checkedPOITypes: "Vaccination centre",
            checkedDemographicTypes: ['race', 'all'],
            checkTimeTypes: [],
            data: null,

            viewState: {
              longitude: -84.3880,
              latitude: 33.7490,
              zoom: 11,
              minZoom: 3,
              maxZoom: 17,
              pitch: 20
            },
            picked_poi_id: null,
            layers: [],
            hexagonLayer: null,
            scatterLayer: null,
            iconLayer: null, 
            polygonLayer: null,
            map: null,
            coverage: 1.0,
            opacity: 0.2,
            hex_set: new Set(),
            time_of_day: 'morning',
            addedPois: [],
            options: [
            {
              value: 'race',
              label: 'Race',
              children: [
                {
                  value: 'all',
                  label: 'All',
                },
                {
                  value: 'white',
                  label: 'White',
                },{
                  value: 'black',
                  label: 'Black',
                },{
                  value: 'asian',
                  label: 'Asian',
                },{
                  value: 'native',
                  label: 'American Indian and Native Alaskan',
                },{
                  value: 'hawaiian',
                  label: 'Native Hawaiian and Other Pacific Islander',
                }]
            },
            {
              value: 'age and sex',
              label: 'Age and Sex'
            },
            {
              value: 'income',
              label: 'Income'
            },
            {
              value: 'origin',
              label: 'Origin'
            },
            {
              value: 'vehicle availability',
              label: 'Vehicle Availability'
            }
            ],
        }
    },
    computed: {
      ...mapState({
        cityData: state => state.cityData,
        pois: state => state.pois,
        clickEvent: state => state.clickEvent,
      })
    },
    watch: {
        opacity(newVal, oldVal) {
            this.update_layers('hex');
        },
        pois: {
          handler(val) {
            this.update_layers('scatter');
          },
          deep: true
        },
        addedPois: {
          handler(val) {
            console.log(val);
            this.update_layers('scatter');
          }
        },
        cityData: {
          handler(val) {
            this.update_layers('hex');
          },
          deep: true
        },
        checkedDemographicTypes: {
          handler(val) {
            this.$store.commit('setConfigDemographicType', val[0]);
            this.update_layers('hex');
            if(val[0] === this.$store.state.config.demographic_category) return;
            this.commit_config_change("demographic_category");
          },
          deep: true
        },
        time_of_day: {
          handler(val) {
            this.$store.commit('setConfigTimeofDay', val);
            this.commit_config_change("time_of_day");
          },
          deep: true
        },
        checkedPOITypes: {
          handler(val) {
            this.$store.commit('setConfigPOIType', val);
            this.commit_config_change("poi_category");
          },
          deep: true
        },
    },
    methods: {
      commit_config_change(change_field) {
        let update_pack = new UpdatePack();
        update_pack.add_change(change_field);
        update_pack.fill_config(this.$store.state.config);
        let proxy = new FEProxy();
        proxy.updateConfig((data)=> {
          this.$store.commit("setStatistics", data.stats);
          this.$store.commit("setPois", data.pois.data);
        }
        , update_pack);
      },
      clearCatchment() {
        if(this.polygonLayer === null) return;
        this.picked_poi_id = null;
        this.polygonLayer = null;
        this.update_layers('scatter');
        this.notify("Remove Catchments Succeed", "All catchment areas removed", true);
      },
      notify(title, message, success) {
        if(success)
          this.$notify({
            title: title,
            message: message,
            duration: 4500,
            type: 'success'
          });
        else
          this.$notify.error({
            title: title,
            message: message,
            duration: 4500,
          });
      },
      handleCatchment(val) {
        let coverage = JSON.parse(val);
        let coordinates = coverage.geometry.coordinates;
        this.update_layers('polygon', coordinates);
      },
      handleClickChain(val) {
        try {
          if(this.clickEvent === 0) {
            if(val.info.layer.id === 'heatmap') {
              this.clearCatchment();
            } else {
              this.picked_poi_id = val.info.object.id;
              this.update_layers('scatter');
              let proxy = new FEProxy();
              proxy.fetchCatchement(this.handleCatchment, val.info.object.id, this.time_of_day, this.checkedDemographicTypes);
            }
          } else this.handleAddPOI(val);
        } catch (e) {
          this.notify("Error", "No POI data found or " + e, false);
          return;
        }
      },
      handleAddPOI(val) {
        if(this.clickEvent === 1) {
          console.log(val);
          if(val.info.layer.id === 'heatmap') {
            let new_poi = {'long': val.info.coordinate[0], 'lat': val.info.coordinate[1], 'name':'wqdwadw','h3id':'d12rdwad','id':-1,'category':'asd','coords':{'lat':val.info.coordinate[1],'long':val.info.coordinate[0]}};
            // this.$store.commit("addPoi", new_poi);
            this.addedPois.push(new_poi);
            this.notify("Add POI Succeed", "It may take a while to recalculate", true);
          } else {
            this.notify("Add POI Failed", "Cannot add POI on a existing POI", false);
          }
        } else {
          this.handleRemovePOI(val);
        }
      },
      handleRemovePOI(val) {
        if(this.clickEvent === 2) {
          if(val.info.layer.id === 'heatmap') {
            this.notify("Remove POI Failed", "Cannot remove an unexisting POI", false);
          } else {
            this.$store.commit("deletePoi", val.info.object.id);
            this.notify("Remove POI Succeed", "It may take a while to recalculate", true);
          }
        } else 
          throw new Error("Invalid clickEvent");
      },
      handleClick(val) {
        this.handleClickChain(val);
      },
      handleViewStateChange(viewState) {
        this.viewState = {
          ...viewState
        };
        if(this.map === null) return;
        this.map.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch
        });
      },
      createPolyonLayer(catchment) {
        let data = catchment;
        let layer = new PolygonLayer({
            id: 'polygon-layer',
            data,
            pickable: true,
            stroked: true,
            filled: true,
            wireframe: true,
            lineWidthMinPixels: 1,
            getPolygon: d => d,
            opacity: 0.5,
            // getElevation: d => d.population / d.area / 10,
            getFillColor: d => [ 60, 140, 0],
            getLineColor: [80, 80, 80],
            getLineWidth: 1
          });
        return layer;
      },
      createHexagonLayer() {
        let data = this.cityData.demographics.data.filter(d => d.total > 0);
        let hexagonLayer = new H3HexagonLayer({
          id: 'heatmap',
          data,
          elevationRange: [0, 0],
          opacity: 0.2,
          wireframe: false,
          filled: true,
          extruded: false,
          pickable: true,
          getHexagon: d=> d.h3id,
          getFillColor: d => {
            let factor = [600, 100, 100, 50, 50, 10];
            if(this.hex_set.has(d.h3id)) return [0,255,0];

            if(this.checkedDemographicTypes.indexOf('white') != -1){return [255,(d.data['White']/factor[1]) * 255,0];}
            if(this.checkedDemographicTypes.indexOf('black') != -1){return [255,(d.data['Black or African American']/factor[2]) * 255,0];}
            if(this.checkedDemographicTypes.indexOf('asian') != -1){return [255,(d.data['Asian']/factor[3]) * 255,0];}
            if(this.checkedDemographicTypes.indexOf('native') != -1){return [255,(d.data['American Indian and Alaska Native']/factor[4]) * 255,0];}
            if(this.checkedDemographicTypes.indexOf('hawaiian') != -1){return [255,(d.data['Native Hawaiian and Other Pacific Islander']/factor[5]) * 255,0];}
            return [255,(d.total/factor[0]) * 255,0];
            
          },
          // updateTriggers: {
          //     getFillColor: document.getElementById('color').checked
          // },
          coverage: this.coverage,
          opacity: this.opacity,
        });
        return hexagonLayer ? hexagonLayer : null;
      },
      createScatterLayer() {
        console.log("Redrawing the layer of Scatter...");
        let layer = new ScatterplotLayer({
          id: 'scatterplot-layer',
          data: [...this.pois, ...this.addedPois],
          pickable: true,
          opacity: 0.8,
          stroked: true,
          filled: true,
          radiusScale: 6,
          radiusMinPixels: 5,
          radiusMaxPixels: 3,
          lineWidthMinPixels: 1,
          getPosition:d => {
            return [d.long, d.lat];
          },
          getRadius: d => 4,
          getFillColor: d => {
              if(this.picked_poi_id === d.id) return [0,255,255];
              return [140,0,0];
          },
          updateTriggers: {
            getFillColor: this.picked_poi_id,
          },
          getLineColor: d => [0, 0, 0],
        });
        return layer ? layer : null;
      },
      createIconLayer() {
        let iconlayer = new IconLayer({
            id: 'icon-layer',
            data: this.pois,
            pickable: true,
            // iconAtlas and iconMapping are required
            // getIcon: return a string
            iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
            iconMapping: this.ICON_MAPPING,
            getIcon: d => 'marker',
            sizeScale: 9,
            getPosition: d => [d.long, d.lat],
            getSize: d => 5,
            getColor: d => [0, 128, 255]
          });
        return iconlayer ? iconlayer : null;
      },
      update_layers(layer='all', payload=null) {
        if(layer === 'all' || layer === 'hex') this.hexagonLayer = this.createHexagonLayer();
        if(layer === 'all' || layer === 'scatter') {
          this.scatterLayer = this.createScatterLayer();
        }
        if(layer === 'all' || layer === 'polygon') this.polygonLayer = this.createPolyonLayer(payload);
        this.$refs['deckgl'].deck.setProps({
          layers: [this.hexagonLayer, this.scatterLayer, this.polygonLayer]
        });
      },
    },
    mounted() {
      this.map = new mapboxgl.Map({
          accessToken: 'pk.eyJ1Ijoic2VuZGF5byIsImEiOiJjams4MjdqOXAyZ2VrM3BydDRzeTR4cjBsIn0.Hk0FF4BvDNJZeDAZZiPlcg',
          container: this.$refs.map,
          style: MAP_STYLE,
          interactive: true,
          center: [this.viewState.longitude, this.viewState.latitude],
          zoom: this.viewState.zoom,
          bearing: 0,
          pitch: this.viewState.pitch
        });
    }
}
</script>

<style lang="less" scoped>
.map {
  width: 70vw;
  height: 90vh;
  #map {
      position: absolute;
      top: 10vh;
      left: 0;
      width: 70vw;
      height: 90vh;
      background: #e5e9ec;
      overflow: hidden;
      opacity: 1;
      z-index: -100;
  }
}
.demonstration {
  font-weight: bold;
}
.deck-map {
  width: 100%;
  height: 100%;
  display: flex;
}
.control-panel {
  position: absolute;
  top: 13vh;
  left: 0;
  font-size: 12px;
  margin-left: 3px;
  line-height: 1.5;
  border-radius: 5px;
  z-index: 1;
  background: #fff;
  font-family: Helvetica, Arial, sans-serif;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
}

.label {
  display: inline-block;
  width: 140px;
}
</style>