import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 搜索数据
    search: ''
  },
  mutations: {
    // 更新搜索
    updateSearch(state, value) {
      // 更新状态数据
      state.search = value
    }
  },
  actions: {}
})
