export const state = () => ({
  isLoggedIn: false,
})

export const mutations = {
  setUserStatus(state, status){
    state.isLoggedIn = status;
  }
}

export const actions = {
  setUserStatus({commit}, status){
    commit('setUserStatus', status);
  },
}

export const getters = {
  getUserStatus(state){
    return state.isLoggedIn;
  }
}
