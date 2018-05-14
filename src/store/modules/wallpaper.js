const state = {
  wallpaperQuantity: 16,
  wallpaperNumber: 1
}

const getters = {
  currentWallpaperNumber: state => {
    return state.wallpaperNumber
  }
}

const mutations = {

  setWallpaper: (state, payload)  => {
    state.wallpaperNumber = payload
  },
  // changeWallpaperPrevious: state => {
  //   if(state.wallpaperNumber === 1) {
  //     state.wallpaperNumber = state.wallpaperQuantity
  //   } else {
  //     state.wallpaperNumber--
  //   }
  // },
  // changeWallpaperNext: state => {
  //   if(state.wallpaperNumber === state.wallpaperQuantity) {
  //     state.wallpaperNumber = 1
  //   } else {
  //     state.wallpaperNumber++
  //   }
  // },
  // changeWallpaperRandom: state => {
  //   state.wallpaperNumber = Math.floor((Math.random() * state.wallpaperQuantity) + 1);
  // },
}

export default {
  state,
  getters,
  mutations
}