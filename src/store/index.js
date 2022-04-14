import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {
      city_id: 1,
      poi_category: "Vaccination centre",
      demographic_category: "Race",
      time_of_day: "morning",
    },
    pois: null,
    cityData: {},
    cityList: {},
    clickEvent: 0,
    statistics: {},
    poi_statistics:{
      labels: ['None'],
      datasets: [
        {
          backgroundColor: ['#A0A0A0'],
          data: [1]
        }
      ]
    },
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
    setStatistics(state, statistics) {
      state.statistics = statistics;
    },
    setPOIStatistics(state, poi_statistics) {
      state.poi_statistics = poi_statistics;
    },
    clearPOIStatistics(state) {
      state.poi_statistics = {
        labels: ['None'],
        datasets: [
          {
            backgroundColor: ['#A0A0A0'],
            data: [1]
          }
        ]
      };
    },
    setConfigPOIType(state, poiType) {
      state.config.poiType = poiType;
    },
    setConfigCity(state, city) {
      state.config.city_id = city;
    },
    setConfigTimeofDay(state, time_of_day) {
      state.config.time_of_day = time_of_day;
    },
    setConfigPOIType(state, poiType) {
      state.config.poi_category = poiType;
    },
    setConfigDemographicType(state, demographicType) {
      state.config.demographic_category = demographicType;
    }
  },
  actions: {
  },
  modules: {
  }
})
