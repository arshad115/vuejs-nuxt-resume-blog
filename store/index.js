import apiService from "../api/apiService";

export const state = () => ({
  resume: {}
})

export const mutations = {
  SET_RESUME (state, index) {
    state.resume = index
  }
}

export const getters = {
  getResume (state) {
    return state.resume
  }
}

export const actions = {
  // GET_RESUME: (ctx)=> {
  //   let resume = {data :'good'}
  //   commit('SET_RESUME', resume)
  // },
  // async getIP ({ commit }) {
  //   const ip = await this.$axios.$get('http://icanhazip.com')
  //   commit('SET_IP', ip)
  // },
  // nuxtServerInit ({ commit }, { req }) {
  //   let resume = {data :'good'}
  //   commit('SET_RESUME', resume)
  // },
  // setResume({ commit }) {
  async nuxtServerInit({ commit, state }, { app })  {
      // await apiService.getResume().then(res => {
      //   commit('SET_RESUME', res.data)
      // }).catch(reason => console.log(reason))

      const res = await apiService.getResume()
      commit('SET_RESUME', res.data)
    }
  // }
}
