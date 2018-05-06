import Vue from 'vue'
import Vuex from 'vuex'
import preloader from './modules/preloader'
import wallpaper from './modules/wallpaper'
import tab from './modules/tab'
import counter from './modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {},
  // getters: {},
  // mutations: {},
  modules: {
    preloader,
    wallpaper,
    tab,
    counter
  }
})
