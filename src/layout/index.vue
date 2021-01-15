<template>
    <a-layout id="components-layout" class="layout">
        <a-layout-header>
            <div class="logo">Drawer</div>
            <menu-template/>
            <section class="search">
                <a-input-search placeholder="请输入搜索内容"/>
            </section>
        </a-layout-header>
        <a-layout-content style="margin:20px 0 0 0;padding: 0 10px;overflow-y:auto;">
            <div :style="{ background: '#fff', padding: '20px',minHeight: '300px',}">
                <router-view/>
            </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center;padding: 10px 0;">
            天小天 ©2021
        </a-layout-footer>
    </a-layout>
</template>
<script>
    import {ref} from  'vue';
    import {useRouter,useRoute} from  'vue-router';
    import menuTemplate from '@/layout/menu/index.vue'
    export default {
        components:{
            'menu-template':menuTemplate
        },
        setup(){
            //路由相关
            const router = useRouter();
            const route = useRoute();
            const routeData = router.options.routes;
            //路由选择项
            const selectedKeys = ref([0]);
            //页面刷新保持高亮
            routeData.forEach((item,index)=>{
                if (item.name == route.name){
                    selectedKeys.value = [index];
                }
            });
            //点击导航页面切换
            function menuClick(e){
                selectedKeys.value = e.keyPath;
                router.push({path:routeData[e.key].path});
            }
            //
            return {
                routeData,
                route,
                selectedKeys,
                menuClick
            }
        },
    };
</script>
<style lang="scss" scoped>
    #components-layout {
        width: 100%;
        height: 100%;
        .ant-layout-header{
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            height: 31px;
            color: rgba(255,255,255,0.6);
            font-size: 22px;
            margin: 0 24px 0 0;
        }
        .search{
            margin: auto 0  auto auto;
        }
    }
</style>
