import { createRouter, createWebHashHistory,createWebHistory, RouteRecordRaw } from 'vue-router'

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
          title: '管理收纳区',
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
      },
      {
        path: 'detail',
        name: 'DetailList',
        meta:{
          title: '查看收纳区',
          layout:true,
          menuShow:true,
        },
        component: () => import('@/views/List/detail.vue'),
      },
      {
        path: 'add-things',
        name: 'AddThings',
        meta:{
          title: '添加物品',
          layout:true,
          menuShow:true,
        },
        component: () => import('@/views/List/addThings.vue'),
      },
      {
        path: 'detail-things',
        name: 'DetailThings',
        meta:{
          title: '查看物品',
          layout:true,
          menuShow:true,
        },
        component: () => import('@/views/List/detailThings.vue'),
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
  },
  {
    path: '/login',
    name: 'Login',
    meta:{
      title: '登录',
      //是否显示在layout布局之内
      layout:false,
      //是否显示在导航条
      menuShow:false,
    },
    component: () => import('@/views/Login/index.vue'),
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
});

export default router
