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
      placement="bottom"
      width="300"
      trigger="click"
      class="control-panel">
        

        <h3>Accessibility statistics parameters</h3>
        <p class="demonstration cp-title">Point of interest type</p>        

        <el-radio-group v-model="checkedPOITypes">
          <el-radio v-for="item in poi_types" :label="item" :key="item">{{item}}</el-radio>
        </el-radio-group>

        <p class="demonstration">Time of Day</p>
        <el-radio-group v-model="time_of_day">
          <el-radio-button v-for="item in time_types" :label="item" :key="item">{{item}}</el-radio-button>
        </el-radio-group>        
        <el-divider></el-divider>

        <!-- <el-checkbox-group v-model="checkedDemographicTypes" @change="handleCheckedDemographicChange">
          <el-checkbox v-for="item in demographic_types" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group> -->
        
        <p class="demonstration cp-title">Demographic Groups</p>
        <el-cascader v-model="checkedDemographicTypes" :options="options"></el-cascader>        
        
        <el-divider></el-divider>
        <div class="block">
          <span class="demonstration">Map opacity</span>
          <el-slider style="width:200px;" v-model="opacity" :width="300" :min="0" :max="1" :step="0.01"></el-slider>
        </div>        
        <el-button type="primary" icon="el-icon-delete" @click="clearCatchment">Clear visible catchments</el-button>
        
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
            checkedPOITypes: "Vaccination centers",
            checkedDemographicTypes: ['Race', 'all'],
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
            options: [
            {
              value: 'Race',
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
              value: 'Age and Sex',
              label: 'Age and Sex'
            },
            {
              value: 'Income',
              label: 'Income'
            },
            {
              value: 'Origin',
              label: 'Origin'
            },
            {
              value: 'Vehicle Availability',
              label: 'Vehicle Availability'
            }
            ],
        }
    },
    computed: {      
      ...mapState({
        cityData: state => state.cityData,
        // demographics: state => state.demographics,
        pois: state => state.pois,
        clickEvent: state => state.clickEvent,
        addedPois: state => state.poisAdded        
      })
    },
    watch: {
        opacity(newVal, oldVal) {
            this.clearCatchment();
            this.update_layers('hex');
        },
        pois: {
          handler(val) {
            this.clearCatchment();
            this.update_layers('scatter');
          },
          deep: true
        },
        addedPois: {
          handler(val) {
            this.clearCatchment();
            this.update_layers('scatter');
            console.log("AddedPOIs triggered");
          }
        },
        cityData: {
          handler(val) {
            this.clearCatchment();
            this.update_layers('hex');         
            let long = val.long;
            let lat = val.lat;
            let viewState = this.viewState;
            viewState.longitude = long;
            viewState.latitude = lat;
            this.viewState = viewState;
            this.map.easeTo({
              center: [viewState.longitude, viewState.latitude],
              zoom: viewState.zoom,
              bearing: viewState.bearing,
              pitch: viewState.pitch
            });
          },
          deep: true
        },
        // demographics: {
        //   handler(val) {
        //     this.clearCatchment();
        //     this.update_layers('hex');            
        //   },
        //   deep: true
        // },
        checkedDemographicTypes: {
          handler(val) {
            this.clearCatchment();
            if(val[0] === this.$store.state.config.demographic_category) return;
            this.$store.commit('setConfigDemographicType', val[0]);
            this.commit_config_change(["demographic_category"]);
            this.update_layers('hex');
          },
          deep: true
        },
        time_of_day: {
          handler(val) {
            this.clearCatchment();
            this.$store.commit('setConfigTimeofDay', val);
            this.commit_config_change(["time_of_day", "demographic_category"]);
          },
          deep: true
        },
        checkedPOITypes: {
          handler(val) {
            this.clearCatchment();
            this.$store.commit('setConfigPOIType', val);
            this.$store.commit("clearPOIChanges");
            let arr_changes = ["poi_category", "demographic_category"]
            this.commit_config_change(arr_changes);
            // this.commit_config_change("poi_category");
            // this.commit_config_change("demographic_category");
          },
          deep: true
        },
    },
    methods: {
      commit_config_change(change_field) {
        let update_pack = new UpdatePack();

        for (var i = 0; i < change_field.length; i ++) {
          update_pack.add_change(change_field[i]);
        }

        update_pack.fill_config(this.$store.state.config);
        update_pack.fill_poi_list({
            "added": this.$store.state.poisAdded.map(val => val.h3id),
            "deleted": this.$store.state.poisRemoved
        });
        let proxy = new FEProxy();
        proxy.updateConfig((data)=> {
          if(data.stats !== null)
            this.$store.commit("setStatistics", data.stats);
          if(data.pois !== null)
            this.$store.commit("setPois", data.pois.data);
          if(data.demographics !== null)
            this.$store.commit("setDemographics", data.demographics);
        }
        , update_pack);
      },
      clearCatchment() {
        if(this.polygonLayer === null) return;
        this.picked_poi_id = null;
        this.polygonLayer = null;
        this.$store.commit('clearPOIStatistics');
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
        let poi_stat = {
        labels: Object.keys(coverage.population_detail),
          datasets: [
            {
              backgroundColor: ['#43A047', '#0D6986', '#8956FF', '#f93e6e', '#EF5411', '#5C4B51', '#cc773f', '#D64045', '#467599', '#546A7B'],
              data: Object.values(coverage.population_detail)
            }
          ]
        }
        this.$store.commit('setPOIStatistics', poi_stat);
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
              proxy.fetchCatchement(this.handleCatchment, this.$store.state.config.city_id, val.info.object.h3id, this.time_of_day, this.checkedDemographicTypes[0]);
            }
          } else this.handleAddPOI(val);
        } catch (e) {
          this.notify("Error", "No POI data found or " + e, false);
          return;
        }
      },
      handleAddPOI(val) {
        if(this.clickEvent === 1) {          
          if(val.info.layer.id === 'heatmap') {
            let new_poi = {
                'long': val.info.coordinate[0], 
                'lat': val.info.coordinate[1], 
                'name':`Unknown ${this.checkedPOITypes}`,
                'h3id':h3.geoToH3(val.info.coordinate[1], val.info.coordinate[0], 9),
                'id':-1 + -1 * this.addedPois.length,
                'category':this.checkedPOITypes,
                'coords':{'lat':val.info.coordinate[1],'long':val.info.coordinate[0]},
                'fake': true
            };
            this.$store.commit("addPOI", new_poi);  
            console.log(this.$store.state.poisAdded)          
            let update_pack = new UpdatePack();
            update_pack.add_change("poi_add");
            update_pack.fill_config(this.$store.state.config);
            update_pack.fill_poi_list({
              "added": this.$store.state.poisAdded.map(val => val.h3id),
              "deleted": this.$store.state.poisRemoved
            });
            let proxy = new FEProxy();
            proxy.updateConfig((data)=> {
              this.$store.commit("setStatistics", data.stats);
            }, update_pack);
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
            // this.$store.commit("deletePoi", val.info.object.id);
            this.$store.commit("removePOI", val.info.object.h3id);            
            let update_pack = new UpdatePack();
            update_pack.add_change("poi_remove");
            update_pack.fill_config(this.$store.state.config);
            update_pack.fill_poi_list({
              "added": this.$store.state.poisAdded.map(val => val.h3id),
              "deleted": this.$store.state.poisRemoved
            });            
            let proxy = new FEProxy();
            proxy.updateConfig((data)=> {
              this.$store.commit("setStatistics", data.stats);
              this.$store.commit("setPois", data.pois.data);
            }, update_pack);
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
            pickable: false,
            stroked: true,
            filled: true,
            wireframe: true,
            lineWidthMinPixels: 1,
            getPolygon: d => d,
            opacity: 0.5,
            // getElevation: d => d.population / d.area / 10,
            getFillColor: d => [60, 140, 0],
            getLineColor: [80, 80, 80],
            getLineWidth: 1,
          });
        return layer;
      },
      createHexagonLayer() {
        let factor_mean = 0;
        for (var i = 0; i < this.cityData.demographics.data.length; i++) {
          let elem = this.cityData.demographics.data[i];
          factor_mean = factor_mean + elem.accessibility;
        }

        factor_mean = factor_mean / this.cityData.demographics.data.length;

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
            // let factor = [5, 5, 5, 5, 5, 5];
            if(this.hex_set.has(d.h3id)) return [0, 0, 0];

            // if(this.checkedDemographicTypes.indexOf('white') != -1){return [255,255-(d.data['White']/factor[1]) * 255,0];}
            // if(this.checkedDemographicTypes.indexOf('black') != -1){return [255,255-(d.data['Black or African American']/factor[2]) * 255,0];}
            // if(this.checkedDemographicTypes.indexOf('asian') != -1){return [255,255-(d.data['Asian']/factor[3]) * 255,0];}
            // if(this.checkedDemographicTypes.indexOf('native') != -1){return [255,255-(d.data['American Indian and Alaska Native']/factor[4]) * 255,0];}
            // if(this.checkedDemographicTypes.indexOf('hawaiian') != -1){return [255,255-(d.data['Native Hawaiian and Other Pacific Islander']/factor[5]) * 255,0];}
            return [170, (d.accessibility/ (2 * factor_mean)) * 255, 0];
            
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
          data: [...this.pois, ...this.$store.state.poisAdded],
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
              if(d.fake) return [255,0,0];
              return [170,10,217];
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