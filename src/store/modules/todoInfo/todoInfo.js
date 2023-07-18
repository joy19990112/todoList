'user strict';
const state = {
  // 计划列表
  todoList: [
    {
      // 计划名称
      planNm: 'planOne',
      // 计划完成时间
      planDt: '20230714',
      // 计划状态 false-未完成/true-已完成
      planSta: true,
      // 计划选中状态
      planChecked: false
    },
    {
      // 计划名称
      planNm: 'planTwo',
      // 计划完成时间
      planDt: '20230718',
      // 计划状态 false-未完成/true-已完成
      planSta: false,
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