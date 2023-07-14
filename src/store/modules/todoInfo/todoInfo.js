'user strict';
const state = {
  // 计划列表
  todoList: [
    {
      // 计划名称
      planNm: 'plan 1',
      // 计划完成时间
      planDt: '20230714',
      // 计划状态 0-未完成/1-已完成
      planSta: '0',
      // 计划选中状态
      planChecked: false
    }
  ],
};
const mutations = {
  setTodoList(state, todoList) {
    state.obj = todoList
  }
};
const actions = {
  getTodoList(context, todoList) {
    context.commit('setTodoList', todoList)
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};