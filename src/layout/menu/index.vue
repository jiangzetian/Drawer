<template>
    <a-menu
            theme="dark"
            mode="horizontal"
            :selectedKeys="selectedKeys"
            :style="{ lineHeight: '64px' }"
            @click="menuClick"
    >
        <a-menu-item
                v-for="(item,index) in routeData"
                :hidden="!item.meta.menuShow"
                :key="index"
        >
            {{item.meta.title}}
        </a-menu-item>
    </a-menu>
</template>

<script lang="ts">
    import {ref} from  'vue';
    import {useRouter,useRoute} from  'vue-router';
    export default {
        components:{
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

            return {
                routeData,
                route,
                selectedKeys,
                menuClick
            }
        },
    };
</script>

<style scoped>

</style>
