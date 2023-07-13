'user strict';
const state = {
  test: '我是test数据'
};
const mutations = {
  setTest(state, obj) {
    state.obj = {
      ...state.obj,
      ...obj
    };
  }
};
const actions = {
  getTest(context, obj) {
    context.commit('setTest', obj)
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};