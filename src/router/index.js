import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './modules'

Vue.use(Router)

let rootRouter = [
  {
    path: '/',
    redirect:
      '/mainInfo',
  },
]

const router =
  new Router({
    mode: 'hash',
    routes:
      rootRouter.concat(
        RouterConfig
      ),
  })

export default router
