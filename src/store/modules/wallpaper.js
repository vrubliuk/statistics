const state = {
  wallpaperNumber: 1
};

const getters = {
  currentWallpaperNumber: state => {
    return state.wallpaperNumber;
  }
};

const mutations = {
  setWallpaper: (state, payload) => {
    state.wallpaperNumber = payload;
  }
};

export default {
  state,
  getters,
  mutations
};
