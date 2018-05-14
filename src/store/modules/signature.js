const state = {
  userName: 'John',
  userSurname: 'Doe',
  userTeamLead: false,
  signatureType: 'default',
  signatureCustom: ''
}

const getters = {
  userName: state => {
    return state.userName
  },
  userSurname: state => {
    return state.userSurname
  },
  userTeamLead: state => {
    return state.userTeamLead
  },
  signatureType: state => {
    return state.signatureType
  },
  signatureText: state => {
    if(state.signatureType === 'default') {
      return `${state.userName}${state.userName.length ? ' ' : ''}${state.userSurname}${state.userName.length || state.userSurname.length ? '\n' : ''}FS Billing Team${state.userTeamLead ? ' Lead' : ''}\nPLS Logistics Services`
    } else if (state.signatureType === 'custom') {
      return state.signatureCustom
    } else {
      return ''
    }
  }
}

const mutations = {
  setUserName: (state, payload) => {
    state.userName = payload
  },
  setUserSurname: (state, payload) => {
    state.userSurname = payload
  },
  setUserTeamLead: (state, payload) => {
    state.userTeamLead = payload
  },
  setSignatureType: (state, payload) => {
    state.signatureType = payload
  },
  setSignatureCustom: (state, payload) => {
    state.signatureCustom = payload
  }
  
}

export default {
  state,
  getters,
  mutations
}
