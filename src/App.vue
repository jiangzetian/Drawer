<template>
  <layout-view v-if="$route.meta.layout"/>
  <router-view v-if="!$route.meta.layout"/>
</template>

<script>
  import Layout from '@/layout/index.vue';
  export default {
    components:{
      'layout-view':Layout,
    },
  }
</script>

<style lang="scss">
  html,body{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
