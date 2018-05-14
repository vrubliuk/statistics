const state = {
  recipients: ['kpolishko@plslogistics.com']
};

const getters = {
  recipientsArray: state => {
    return state.recipients;
  }
};

const mutations = {
  addRecipient: (state, payload) => {
    state.recipients.push(payload);
  },
  removeRecipient: (state, payload) => {
    state.recipients.splice(state.recipients.indexOf(payload), 1);
  }
};

export default {
  state,
  getters,
  mutations
};
