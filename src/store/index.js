import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 动态加载modlues
const allDynamicModules = {};
const files = require.context('./', true, /\.js$/);
const dynamicImportModules = (modules, file, splits, index = 0) => {
  if (index === 0 && splits[0] === 'modules') {
    ++index;
  }
  if (splits.length == index + 1) {
    if ('index' == splits[index]) {
      modules[splits[index - 1]] = files(file).default;
    } else {
      modules.modules[splits[index]] = files(file).default;
    }
  } else {
    let tmpModules = {};
    if ('index' == splits[index + 1]) {
      tmpModules = modules;
    } else {
      modules[splits[index]] = modules[splits[index]] ? modules[splits[index]] : { namespaced: true, modules: {} };
      tmpModules = modules[splits[index]];
    }
    dynamicImportModules(tmpModules, file, splits, ++index);
  }
};
files
  .keys()
  .filter(file => file != './index.js')
  .forEach(file => {
    let splits = file.replace(/(\.\/|\.js)/g, '').split('/');
    dynamicImportModules(allDynamicModules, file, splits);
  });

const store = new Vuex.Store({
  state: {},
  modules: allDynamicModules,
  mutations: {
    $uStore(state, payload) {
      // 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
      let nameArr = payload.name.split('.');
      let saveKey = '';
      let len = nameArr.length;
      if (nameArr.length >= 2) {
        let obj = state[nameArr[0]];
        for (let i = 1; i < len - 1; i++) {
          obj = obj[nameArr[i]];
        }
        obj[nameArr[len - 1]] = payload.value;
        saveKey = nameArr[0];
      } else {
        // 单层级变量，在state就是一个普通变量的情况
        state[payload.name] = payload.value;
        saveKey = payload.name;
      }
    }
  },
  actions: {}
});

export default store;
