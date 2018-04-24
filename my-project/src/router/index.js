import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import DemoPage from '@/components/demo'

Vue.use(Router)

export default new Router({// 继续在下面配置路由，在上方需要引入页面模块
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',  //路由
      name: 'Index',
      component: Index  // 对应页面模块
    },
    {
      path: '/demo',
      name: 'DemoPage',
      component: DemoPage
    }
  ]
})
