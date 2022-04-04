import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {},
    pois: [],
  },
  mutations: {
    SET_POIS(state, pois) {
      state.pois = pois;
    },
    SET_CONFIG(state, config) {
      state.config = config;
    },
  },
  actions: {
  },
  modules: {
  }
})
