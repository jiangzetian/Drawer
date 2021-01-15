import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta:{
      title: '首页',
      //是否显示在layout布局之内
      layout:true,
      //是否显示在导航条
      menuShow:true,
    },
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/list',
    name: 'List',
    meta:{
      title: '收纳',
      layout:true,
      menuShow:true,
    },
    redirect:'/list/show',
    component: () => import('@/views/List/index.vue'),
    children:[
      {
        path: 'show',
        name: 'ShowList',
        meta:{
          title: '查看收纳区',
          layout:true,
          menuShow:true,
        },
        component: () => import('@/views/List/show.vue'),
      },
      {
        path: 'add',
        name: 'AddList',
        meta:{
          title: '添加收纳区',
          layout:true,
          menuShow:true,
        },
        component: () => import('@/views/List/add.vue'),
      }
    ]
  },
  {
    path: '/exhibit',
    name: 'Exhibit',
    meta:{
      title: '展品',
      layout:true,
      menuShow:true,
    },
    component: () => import('@/views/Exhibit/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      title: '我的',
      layout:true,
      menuShow:true,
    },
    component: () => import('@/views/About/index.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
