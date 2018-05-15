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
    meta: {
      title: '首页(资讯)',
      hasHeader: true, // 是否显示头部
    },
    component: resolve => require(['./views/index.vue'], resolve)
  },
  {
    path: '/court',
    name: 'court',
    meta: {
      title: '球场',
      hasHeader: true, // 是否显示头部
    },
    component: resolve => require(['./views/court.vue'], resolve)

  },
  {
    path: '/game',
    name: 'game',
    meta: { title: '比赛' },
    component: resolve => require(['./views/game.vue'], resolve)
  },
  {
    path: '/user',
    name: 'user',
    meta: { title: '我的' },
    component: resolve => require(['./views/user.vue'], resolve)
  },
]





export default routes;
