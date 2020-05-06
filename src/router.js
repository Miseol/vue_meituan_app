import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List'
import Detail from './views/Detail'

Vue.use(Router)

let routes = [
  { path: '/list/:id', component: List },
  { path: '/detail/:id', component: Detail },
  { path: '*', component: Home }
]
export default new Router({ routes })
