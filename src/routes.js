const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: resolve => require(['./views/login.vue'], resolve),

  },
  {
    path: '/',
    name: 'index',
    meta: { title: '首页' },
    component: resolve => require(['./views/index.vue'], resolve)
  },
  {
    path: '/user',
    name: 'user',
    meta: { title: '我的' },
    component: resolve => require(['./views/user.vue'], resolve)

  },
]





export default routes;
