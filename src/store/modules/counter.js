import { isNumber } from "util";

const state = {
  counterValue: 0,
  counterMaximized: false,
  animationType: "flipInX",
  animationDuration: 700,
  animationRunning: false
};

const getters = {
  counterValue: state => {
    return state.counterValue;
  },
  counterMaximized: state => {
    return state.counterMaximized;
  },
  animationType: state => {
    return state.animationType;
  },
  animationDuration: state => {
    return state.animationDuration;
  },
  animationRunning: state => {
    return state.animationRunning;
  }
};

const mutations = {
  increaseCounter: state => {
    if (state.counterValue < 999) state.counterValue++;
  },
  decreaseCounter: state => {
    if (state.counterValue > 0) state.counterValue--;
  },
  resetCounter: state => {
    state.counterValue = 0;
  },
  setCounter: (state, payload) => {
    state.counterValue = payload;
  },

  runAnimation: state => {
    state.animationRunning = true;
  },
  stopAnimation: state => {
    state.animationRunning = false;
  },
  resizeCounter: state => {
    state.counterMaximized = !state.counterMaximized;
  },
  setCounterSize: (state, payload) => {
    state.counterMaximized = payload;
  }
};

export default {
  state,
  getters,
  mutations
};
