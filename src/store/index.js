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
    demographics:{},
    poisAdded: [],
    poisRemoved: [],
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
    clearPOIChanges(state) {
        state.poisAdded = []
        state.poisRemoved = []
    },
    addPOI(state, poi) {
        state.poisAdded.push(poi)
    },
    removePOI(state, h3id) {
        state.poisRemoved.push(h3id)
        state.poisAdded = state.poisAdded.filter(val => val.h3id != h3id)
    },    
    setConfig(state, config) {
      state.config = config;
    },
    setCityData(state, cityData) {
      state.cityData = cityData;
    },
    setDemographics(state, demographics) {
      state.cityData.demographics = demographics;
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
