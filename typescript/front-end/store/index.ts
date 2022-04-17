import {
  getAccessorType,
  mutationTree,
} from 'typed-vuex'

export const state = () => ({
  counter: 0 as number
})

export const mutations = mutationTree(state, {
  increment(state) {
    state.counter++
  }
})

export const accessorType = getAccessorType({
  state,
  mutations,
  modules: {},
})
