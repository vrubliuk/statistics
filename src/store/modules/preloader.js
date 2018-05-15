const state = {
  preloader: true
};

const getters = {
  showPreloader: state => {
    return state.preloader;
  }
};

const mutations = {
  hidePreloader: state => {
    state.preloader = false;
  }
};

export default {
  state,
  getters,
  mutations
};
