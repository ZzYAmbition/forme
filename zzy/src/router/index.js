import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const login = () => import('../views/login.vue')
const home = () => import('../views/home.vue')

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login,
    name: 'login'
  },
  {
    path: '/home',
    component: home,
    name: 'home'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 目的路由为login直接跳
  if (to.name === "login") {
    console.log("我是登录");
    next();
  } else {
    // 判断是否登录
    if (localStorage.getItem('account')) {
      console.log("我已经登录");
      next();
    } else {
      // 这里会触发前置导航守卫
      next('/login');
    }
  }
})
export default router
