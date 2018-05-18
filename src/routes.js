// basic
const basic = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: resolve => require(['./views/basic/login.vue'], resolve),
  },
];
// 新闻资讯
const news = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页(资讯)',
      hasHeader: true, // 是否显示头部
    },
    component: resolve => require(['./views/news/news.vue'], resolve)
  },
  {
    path: '/news/:id',
    name: 'news.detail',
    meta: {
      title: '新闻资讯详情',
      hasHeader: true, // 是否显示头部
    },
    // components: {
    //   newsDetail: resolve => require(['./views/news/news.detail.vue'], resolve)
    // },
    component: resolve => require(['./views/news/news.detail.vue'], resolve)
  },
];
// 球场
const court = [
  {
    path: '/court',
    name: 'court',
    meta: {
      title: '球场',
      hasHeader: true, // 是否显示头部
    },
    component: resolve => require(['./views/court/court.vue'], resolve)
  },
  {
    path: '/court/add',
    name: 'court.add',
    meta: {
      title: '添加球场',
      hasHeader: true,
    },
    component: resolve => require(['./views/court/court.edit.vue'], resolve)
  }, {
    path: '/court/edit/:id',
    name: 'court.edit',
    meta: {
      title: '修改球场',
      hasHeader: true,
    },
    component: resolve => require(['./views/court/court.edit.vue'], resolve)
  },
];
// 比赛
const league = [
  {
    path: '/league',
    name: 'league',
    meta: {
      title: '联赛',
      hasHeader: true,
    },
    component: resolve => require(['./views/league/league.vue'], resolve)
  },
  {
    path: '/league/detail/:id',
    name: 'league.detail',
    meta: {
      title: '联赛详情',
      hasHeader: true,
    },
    component: resolve => require(['./views/league/league.detail.vue'], resolve)
  },
];
// 用户中心
const user = [
  {
    path: '/user',
    name: 'user',
    meta: { title: '我的' },
    component: resolve => require(['./views/user/user.vue'], resolve)
  },
];

let routes = []
routes = routes.concat(basic, news, league, court, user)

export default routes;
