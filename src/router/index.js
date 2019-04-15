import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { title: '首页' },
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
      redirect: '/homepage',
      children: [{
        path: '/homepage',
        name: 'Homepage',
        component: () => import(/* webpackChunkName: "Homepage" */ '../views/homepage'),
      },
      /* 业务管理 */
      {
        path: '/business',
        name: 'Business',
        meta: { title: '业务管理' },
        component: () => import(/* webpackChunkName: "Business" */ '../views/business'),
        redirect: '/business/phoneAppointment',
        children: [{
          path: '/business/phoneAppointment',
          name: 'BusinessPhoneAppointment',
          meta: { title: '电话预约' },
          component: () => import(/* webpackChunkName: "BusinessPhoneAppointment" */ '../views/business/phoneAppointment'),
        },
        {
          path: '/business/workManagement',
          name: 'BusinessWorkManagement',
          component: () => import(/* webpackChunkName: "BusinessWorkManagement" */ '../views/business/workManagement/index'),
          redirect: '/business/workManagement/all',
          children: [{
            path: '/business/workManagement/all',
            name: 'BusinessWorkAll',
            meta: { title: '全部' },
            component: () => import(/* webpackChunkName: "BusinessWorkAll" */ '../views/business/workManagement/numberType/all'),
          }, {
            path: '/business/workManagement/assign',
            name: 'BusinessWorkAssign',
            meta: { title: '待指派' },
            component: () => import(/* webpackChunkName: "BusinessWorkAssign" */ '../views/business/workManagement/numberType/assign'),
          }, {
            path: '/business/workManagement/wait',
            name: 'BusinessWorkWait',
            meta: { title: '待接单' },
            component: () => import(/* webpackChunkName: "BusinessWorkWait" */ '../views/business/workManagement/numberType/wait'),
          },
          {
            path: '/business/workManagement/server',
            name: 'BusinessWorkServer',
            meta: { title: '服务中' },
            component: () => import(/* webpackChunkName: "BusinessWorkServer" */ '../views/business/workManagement/numberType/server'),
          },
          {
            path: '/business/workManagement/verify',
            name: 'BusinessWorkVerify',
            meta: { title: '待审核' },
            component: () => import(/* webpackChunkName: "BusinessWorkVerify" */ '../views/business/workManagement/numberType/verify'),
          },
          {
            path: '/business/workManagement/finish',
            name: 'BusinessWorkFinish',
            meta: { title: '已完成' },
            component: () => import(/* webpackChunkName: "BusinessWorkFinish" */ '../views/business/workManagement/numberType/finish'),
          },
          {
            path: '/business/workManagement/termination',
            name: 'BusinessWorkTermination',
            meta: { title: '已终止' },
            component: () => import(/* webpackChunkName: "BusinessWorkTermination" */ '../views/business/workManagement/numberType/termination'),
          }],
        }, {
          path: '/business/workManagement/detail',
          name: 'BusinessWorkDetail',
          meta: { title: '详情' },
          component: () => import(/* webpackChunkName: "BusinessworkDetail" */ '../views/business/workManagement/detail'),
        }],
      },
      /* 人员管理 */
      {
        path: '/personnel',
        name: 'Personnel',
        component: () => import(/* webpackChunkName: "Personnel" */ '../views/personnel'),
        redirect: '/personnel/service',
        children: [{
          path: '/personnel/service',
          name: 'PersonnelService',
          component: () => import(/* webpackChunkName: "PersonnelService" */ '../views/personnel/service'),
        },
        {
          path: '/personnel/service/add',
          name: 'PersonnelServiceAdd',
          component: () => import(/* webpackChunkName: "PersonnelServiceAdd" */ '../views/personnel/service/add'),
        },
        ],
      },
      /* 财富管理 */
      {
        path: '/wealth',
        name: 'Wealth',
        meta: { title: '财富管理' },
        component: () => import(/* webpackChunkName: "Wealth" */ '../views/wealth'),
        redirect: '/wealth/masonry',
        children: [{
          path: '/wealth/masonry',
          name: 'wealthMasonry',
          meta: { title: '财钻管理' },
          component: () => import(/* webpackChunkName: "wealthMasonry" */ '../views/wealth/masonry'),
        },
        {
          path: '/wealth/points',
          name: 'wealthPoints',
          meta: { title: '贡献分管理' },
          component: () => import(/* webpackChunkName: "wealthPoints" */ '../views/wealth/points'),
        },
        {
          path: '/wealth/points/detail/:aaId',
          name: 'wealthPointDetail',
          meta: { title: '贡献分管理详情' },
          component: () => import(/* webpackChunkName: "wealthPointDetail" */ '../views/wealth/points/pointDetail'),
        },
        {
          path: '/wealth/exchange',
          name: 'wealthExchange',
          meta: { title: '物品兑换管理' },
          component: () => import(/* webpackChunkName: "wealthExchange" */ '../views/wealth/exchange'),
        },
        {
          path: '/wealth/goods',
          name: 'wealthGoods',
          meta: { title: '物品管理' },
          component: () => import(/* webpackChunkName: "wealthGoods" */ '../views/wealth/goods'),
        },
        {
          path: '/wealth/addgoods',
          name: 'wealthAddGoods',
          meta: { title: '新增物品' },
          component: () => import(/* webpackChunkName: "wealthAddGoods" */ '../views/wealth/goods/addGoods'),
        },
        {
          path: '/wealth/detailGoods',
          name: 'wealthDetailGoods',
          meta: { title: '物品管理查看' },
          component: () => import(/* webpackChunkName: "wealthDetailGoods" */ '../views/wealth/goods/detailGoods'),
        },
        {
          path: '/wealth/redPacket',
          name: 'wealthRedPacket',
          meta: { title: '红包管理' },
          component: () => import(/* webpackChunkName: "wealthRedPacket" */ '../views/wealth/redPacket'),
        }],
      }],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
  ],
});
