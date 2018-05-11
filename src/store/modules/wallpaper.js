const state = {
  wallpaperQuantity: 15,
  wallpaperNumber: 12
}

const getters = {
  currentWallpaperNumber: state => {
    return state.wallpaperNumber
  }
}

const mutations = {
  changeWallpaperPrevious: state => {
    if(state.wallpaperNumber === 1) {
      state.wallpaperNumber = state.wallpaperQuantity
    } else {
      state.wallpaperNumber--
    }
  },
  changeWallpaperNext: state => {
    if(state.wallpaperNumber === state.wallpaperQuantity) {
      state.wallpaperNumber = 1
    } else {
      state.wallpaperNumber++
    }
  },
  changeWallpaperRandom: state => {
    state.wallpaperNumber = Math.floor((Math.random() * state.wallpaperQuantity) + 1);
  },
}

export default {
  state,
  getters,
  mutations
}