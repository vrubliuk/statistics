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
}
  
}

const mutations = {
  setUserName: (state, payload) => {
    state.userName = payload
  },
  setUserSurname: (state, payload) => {
    state.userSurname = payload
  }
}

export default {
  state,
  getters,
  mutations
}
