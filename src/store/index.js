import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {},
    pois: null,
    cityData: {},
    cityList: {},
    clickEvent: 0,
  },
  mutations: {
    setClickEvent(state, clickEvent) {
      state.clickEvent = clickEvent
    },
    setPois(state, pois) {
      state.pois = pois;
    },
    addPoi(state, poi) {
      state.pois.push(poi); 
    }, 
    deletePoi(state, id) {
      state.pois = state.pois.filter(poi => poi.id !== id);
      },
    setConfig(state, config) {
      state.config = config;
    },
    setCityData(state, cityData) {
      state.cityData = cityData;
    },
    setCityList(state, cityList) {
      state.cityList = cityList;
    },
    setConfigPOIType(state, poiType) {
      state.config.poiType = poiType;
    },
    setConfigCity(state, city) {
      state.config.city = city;
    }
  },
  actions: {
  },
  modules: {
  }
})
