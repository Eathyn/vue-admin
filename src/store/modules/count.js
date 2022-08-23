const count = {
  state() {
    return {
      count: 1,
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },
  mutations: {
    INCREMENT(state) {
      state.count++
    },
  },
  actions: {
    increment(context) {
      context.commit('INCREMENT')
    },
  },
}

export default count
