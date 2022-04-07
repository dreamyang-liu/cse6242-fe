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
        <el-checkbox :indeterminate="isIndeterminatePOI" v-model="check_all_poi" @change="handleCheckAllPOIChange">Check all</el-checkbox>
        <el-checkbox-group v-model="checkedPOITypes" @change="handleCheckedPOIChange">
          <el-checkbox v-for="item in poi_types" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
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
          <el-radio-button v-for="item in time_types" :key="item">{{item}}</el-radio-button>
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
import { ScatterplotLayer, IconLayer } from '@deck.gl/layers';
import {H3HexagonLayer} from '@deck.gl/geo-layers';
import mapboxgl from 'mapbox-gl';
import { mapState } from 'vuex';
import FEProxy from '../utils/FEProxy';
import * as h3 from 'h3-js';

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
            checkedPOITypes: [],
            checkedDemographicTypes: 'all',
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
            layers: [],
            hexagonLayer: null,
            scatterLayer: null,
            map: null,
            coverage: 1.0,
            opacity: 0.2,
            hex_set: new Set(),
            check_all_poi: false,
            time_of_day: '',
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
            }],
        }
    },
    computed: {
      isIndeterminatePOI() {
        return this.checkedPOITypes.length > 0 && this.checkedPOITypes.length < this.poi_types.length;
      },
      checkAllPOI() {
        return this.checkedPOITypes.length === this.poi_types.length;
      },
      ...mapState({
        cityData: state => state.cityData,
        pois: state => state.pois,
        clickEvent: state => state.clickEvent,
      })
    },
    watch: {
        opacity(newVal, oldVal) {
            this.update_layers();
        },
        pois: {
          handler(val) {
            this.update_layers('scatter');
          },
          deep: true
        },

        cityData: {
          handler(val) {
            this.update_layers('hex');
          },
          deep: true
        },
        checkedDemographicTypes: {
          handler(val) {
            console.log(val);
            this.update_layers('hex');
          },
          deep: true
        },
    },
    methods: {

      handleCheckAllPOIChange(val) {
        this.checkedPOITypes = val ? this.poi_types.map((val) => { return val;}) : [];
      },
      handleCheckedPOIChange(value) {
        this.check_all_poi = this.checkAllPOI;
      },
      clearCatchment() {
        this.hex_set.clear();
        this.update_layers('hex');
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
        function union(a, b) {
          return new Set([...a, ...b]);
        }
        let coverage = JSON.parse(val);
        let coordinates = coverage.geometry.coordinates.flat(2).map((coord) => {
          return [coord[1], coord[0]];
        });
        let hexids = h3.polyfill(coordinates, 9);
        let hex_set = new Set(hexids);
        this.hex_set = union(hex_set, this.hex_set);
        this.update_layers('hex');
      },
      handleClickChain(val) {
        try {
          if(this.clickEvent === 0) {
            if(val.info.layer.id === 'heatmap') {
              // nothing
            } else {
              let proxy = new FEProxy();
              proxy.fetchCatchement(this.handleCatchment, val.info.object.id);
            }
          } else this.handleAddPOI(val);
        } catch (e) {
          this.notify("Error", "No POI data found", false);
          return;
        }
      },
      handleAddPOI(val) {
        if(this.clickEvent === 1) {
          if(val.info.layer.id === 'heatmap') {
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

            if(this.checkedDemographicTypes.indexOf('all') != -1){return [255,(d.total/factor[0]) * 255,0];}
            if(this.checkedDemographicTypes.indexOf('white') != -1){return [255,(d.data['White']/factor[1]) * 255,0];}
            if(this.checkedDemographicTypes.indexOf('black') != -1){return [255,(d.data['Black or African American']/factor[2]) * 255,0];}
            if(this.checkedDemographicTypes.indexOf('asian') != -1){return [255,(d.data['Asian']/factor[3]) * 255,0];}
            if(this.checkedDemographicTypes.indexOf('native') != -1){return [255,(d.data['American Indian and Alaska Native']/factor[4]) * 255,0];}
            if(this.checkedDemographicTypes.indexOf('hawaiian') != -1){return [255,(d.data['Native Hawaiian and Other Pacific Islander']/factor[5]) * 255,0];}
            
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
        let scatterLayer = new ScatterplotLayer({
            id: 'scatter-layer',
            data: this.pois,
            opacity: 0.8,
            filled: true,
            radiusMinPixels: 4,
            radiusMaxPixels: 4,
            getRadius: d => 4,
            getPosition: d => {
              return [d.long, d.lat];
            },
            getFillColor: d => [0, 0, 255],
            pickable: true,
            onHover: ({object, x, y}) => {
              // console.log(object);
            },
        });
        return scatterLayer ? scatterLayer : null;
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
      update_layers(layer='all') {
        if(layer === 'all' || layer === 'hex')
        this.hexagonLayer = this.createHexagonLayer();
        if(layer === 'all' || layer === 'scatter')
        this.scatterLayer = this.createScatterLayer();
        this.layers = [this.hexagonLayer, this.scatterLayer];
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