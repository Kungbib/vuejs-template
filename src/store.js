import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {aValue: null,},
  getters: {
    aValue: state => {
      return state.aValue;
    },
  },
  mutations: {
    setAValue(state, value) {
      state.aValue = value;
    },
  },
  actions: {
    setAValue({ commit }, value) {
      commit('setAValue', value);
    },
  }
})
