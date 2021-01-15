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
            for (let i=0;i<routeData.length;i++){
                const nowPath = route.path.substring(1).split('/');
                const tempPath = routeData[i].path.substring(1);
                if(nowPath.indexOf(tempPath)>=0){
                    selectedKeys.value = [i];
                }
            }
            //点击导航页面切换
            function menuClick(e: any){
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
