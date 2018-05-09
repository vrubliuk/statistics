const state = {
  userName: 'Name',
  userSurname: 'Surname',
  userTeamLead: false,
  userSignature: ``
}


const getters = {
 signature: state => {
   return state.userSignature
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
