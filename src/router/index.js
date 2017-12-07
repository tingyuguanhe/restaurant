import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const layout = () => import('@/views/layout/main_app')
const index = () => import('@/views/index')
const list =() => import('@/views/list')

const indexBreadcrumb = {name: '首页', href: '/'};

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
          path: '',
          name: 'index',
          component: index,
          meta:{
            title: '首页'
          }
        },
        {
          path: '/list/:type',
          name: 'list',
          component: list,
          meta:{
            title: '列表页',
            breadcrumbs:[{name: indexBreadcrumb.name, href: indexBreadcrumb.href},{name:'案件处理'}]
          }
        }
      ]
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  next();
})

export default router