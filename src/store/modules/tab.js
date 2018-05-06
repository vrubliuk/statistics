const state = {
  tab: 'preferences',
  tabData: [{
      name: 'counter',
      icon: 'fa fa-star'
    },
    {
      name: 'user',
      icon: 'fa fa-user'
    },
    {
      name: 'send',
      icon: 'fa fa-paper-plane'
    },
    {
      name: 'preferences',
      icon: 'fa fa-cog'
    }
  ]
}


const getters = {
  currentTab: state => {
    return state.tab
  },
  tabs: state => {
    return state.tabData
  }
}

const mutations = {
  switchTab: (state, payload) => {
   state.tab = payload
  }
}

export default {
  state,
  getters,
  mutations
}
