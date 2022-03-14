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
        height="80vh"
    >
    </VueDeckgl>
    <div id="map" ref="map"></div>
    <div id="control-panel" class="control-panel">
        <div>
          <label>Coverage</label>
          <input id="coverage" type="range" min="0" max="1" step="0.1" value="0.9" @change="update_layers"></input>
          <span id="coverage-value"></span>
        </div>
        <div>
            <label>Opacity</label>
            <input id="opacity" type="range" min="0" max="1" step="0.1" value="0.2" @change="update_layers"></input>
            <span id="opacity-value"></span>    
          </div>
          <div>
            <label for="color">Color Inversion</label>
            <input id="color" type="checkbox" name="color" @change="update_layers"></input>
            <span id="color-value"></span>    
          </div>   
    </div>
</div>
</template>

<script>
import VueDeckgl from "./VueDeckgl";
import { ScatterplotLayer, IconLayer } from '@deck.gl/layers';
import {H3HexagonLayer} from '@deck.gl/geo-layers';
import * as d3 from 'd3';
import * as h3 from 'h3-js';
import mapboxgl from 'mapbox-gl';

const MAP_STYLE = 'mapbox://styles/mapbox/streets-v11';

export default {
    name: "Map",
    components: {
        VueDeckgl
    },
    data() {
        return {
            POIdata: {},
            ICON_MAPPING: {
              marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
            },
            OPTIONS: ['coverage','opacity'],
            COLOR_RANGE: [
              //[1, 152, 189],
              //[73, 227, 206],
              //[216, 254, 181],
              //[254, 237, 177],
              //[254, 173, 84],
              [209, 55, 78]
            ],
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
            map: null,
        }
    },
    methods: {
      handleClick() {
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

      update_layers() {
        const options = {};
        this.OPTIONS.forEach(key => {
          let value = document.getElementById(key).value;
          document.getElementById(key + '-value').innerHTML = value;
          options[key] = Number(value);
        });
        if (this.data === null) return [];
        let data = this.data;
        let hexagonLayer = new H3HexagonLayer({
        id: 'heatmap',
        data,
        elevationRange: [0, 0],
        opacity: 0.2,
        wireframe: false,
        filled: true,
        extruded: false,
        pickable: true,
        getHexagon: d=> d.hex,
        getFillColor: d=> {if(document.getElementById('color').checked==true){return [0, (1-d.totpop/5000) * 255, 255]} else{ return [255, (1-d.totpop/5000) * 255, 0]}},
        updateTriggers: {
            getFillColor: document.getElementById('color').checked

        },
        ...options
      });
      
      let scatterplot = new ScatterplotLayer({
            id: 'scatter',
            data: this.POIdata,
            opacity: 0.8,
            filled: true,
            radiusMinPixels: 2,
            radiusMaxPixels: 3,
            //getRadius: d => 2,
            getPosition: d => [d[0],d[1]],
            getFillColor: d => [0, 128, 255],
            pickable: true,
       });
       
      let iconlayer = new IconLayer({
        id: 'icon-layer',
        data: this.POIdata,
        pickable: true,
        // iconAtlas and iconMapping are required
        // getIcon: return a string
        iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
        iconMapping: this.ICON_MAPPING,
        getIcon: d => 'marker',

        sizeScale: 9,
        getPosition: d => [d[0], d[1]],
        getSize: d => 1,
        getColor: d => [0, 128, 255]
      });
      this.layers = [hexagonLayer, scatterplot, iconlayer];
      },
      load_dummy_data() {
        d3.csv('./dummy_data.csv')
          .then(response => {
          this.POIdata = response.map(d => [Number(d.stop_lon), Number(d.stop_lat)]);
          // console.log(this.POIdata);
        });
      },
        //
    },
    mounted() {
    
    this.load_dummy_data();
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1Ijoic2VuZGF5byIsImEiOiJjams4MjdqOXAyZ2VrM3BydDRzeTR4cjBsIn0.Hk0FF4BvDNJZeDAZZiPlcg',
      container: this.$refs.map,
      style: MAP_STYLE,
      // Note: deck.gl will be in charge of interaction and event handling
      interactive: true,
      center: [this.viewState.longitude, this.viewState.latitude],
      zoom: this.viewState.zoom,
      bearing: 0,
      pitch: this.viewState.pitch
    });
    const load_data = new Promise((resolve, reject) => {
      d3.csv('lat_lon_to_census_data.csv')
          .then(response => {
          this.data = response.map(d => ({hex: h3.geoToH3(Number(d.lat), Number(d.lon), 8), lon: Number(d.lon), lat: Number(d.lat), totpop: Number(d.pop_total), white: Number(d.pop_white), black: Number(d.pop_black), hisp: Number(d.pop_indian_alaskan), asian: Number(d.pop_asian)}));
          // console.log(this.data);
          // Calculate the sums and group data (while tracking count)
          this.data = this.data.reduce(function(m, d){
              if(!m[d.hex]){
                  m[d.hex] = {...d, count: 1};
                  return m;
                }
                m[d.hex].totpop += d.totpop;
                m[d.hex].white += d.white;
                m[d.hex].black += d.black;
                m[d.hex].hisp += d.hisp;
                m[d.hex].asian += d.asian;
                m[d.hex].count += 1;
                return m;
            },{});
            
          // Create new array from grouped data and compute the average
          let _this = this;
          this.data = Object.keys(this.data).map(function(k){
              let item  = _this.data[k];
              return {
                  hex: item.hex,
                  totpop: item.totpop,
                  count: item.count,
                  white: item.white,
                  black: item.black,
                  hisp: item.hisp,
                  asian: item.asian
                }
          })
          resolve(this.data);
        });
    });
    load_data.then((s) => {
      console.log(s);
      this.update_layers();
    });
    }
}
</script>

<style lang="less" scoped>
.map {
  width: 70vw;
  height: 80vh;
  // background: cornflowerblue;
  #map {
      position: absolute;
      top: 20vh;
      left: 0;
      width: 70vw;
      height: 80vh;
      background: #e5e9ec;
      overflow: hidden;
      opacity: 1;
      z-index: -100;
  }
}

.deck-map {
  width: 100%;
  height: 100%;
  display: flex;
}
.control-panel {
  position: absolute;
  top: 23vh;
  left: 0;
  margin: 12px;
  padding: 20px;
  font-size: 12px;
  line-height: 1.5;
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