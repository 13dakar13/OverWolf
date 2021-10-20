export const state = () => ({
  isLoggedIn: false,
  animationsShown: null,
})

export const mutations = {
  setUserStatus(state, status){
    state.isLoggedIn = status;
  },

  setAnimationsStatus(state, status){
    state.animationsShown = status;

    if(process.browser){
      localStorage.setItem('animationsStatus', JSON.stringify({ status }));
    }
  },
}

export const actions = {
  setUserStatus({commit}, status){
    commit('setUserStatus', status);
  },

  setAnimationsStatus({commit}, status){
    commit('setAnimationsStatus', status);
  },
}

export const getters = {
  getUserStatus(state){
    return state.isLoggedIn;
  },

  getAnimationsStatus(state){
    return state.animationsShown;
  },
}
