<template>
    <!--操作-->
    <a-row class="listHeader" type="flex" justify="space-between" align="middle">
        <a-button type="primary" @click="navToAddTings">添加物品</a-button>
        <a-button type="primary" @click="navToshow">返回列表</a-button>
    </a-row>
    <!--列表-->
    <a-list  :grid="{ gutter: 20, xs: 1, sm: 2, md: 3, lg: 4 }"  :data-source="listData">
        <template #renderItem="{ item, index }">
            <a-list-item>
                <a-card hoverable size="small"  :title="item.title+index">
                    <template #extra><router-link :to="{path:'/list/detail-things',query:{tid:1}}">查看</router-link></template>
                    <a-descriptions :column="1" size="small">
                        <a-descriptions-item label="">
                            这是这个仓库的描述内容大概15个字
                        </a-descriptions-item>
                        <a-descriptions-item label="编号">
                            1810000000
                        </a-descriptions-item>
                        <a-descriptions-item label="标签">
                            <a-tag color="blue">夏季衣物</a-tag>
                            <a-tag color="blue">床上用品</a-tag>
                        </a-descriptions-item>
                        <a-descriptions-item label="时间">
                            2021-01-01
                        </a-descriptions-item>
                    </a-descriptions>
                </a-card>
            </a-list-item>
        </template>
    </a-list>
    <!--分页-->
    <a-row type="flex" justify="center" align="middle">
        <a-pagination :current="1" :total="50" show-less-items />
    </a-row>
</template>

<script lang="ts">
    import {defineComponent,ref} from 'vue'
    import {useRouter} from "vue-router";
    export default defineComponent({
        setup(){
            //路由
            const router = useRouter();
            //列表
            const listData = ref([
                {
                    title: '物品',
                },
                {
                    title: '物品',
                },
            ]);
            //跳转
            const navToshow = ()=>{
                router.push({path:'/list/show'})
            }
            //添加物品
            const navToAddTings = ()=>{
                router.push({path:'/list/add-things'})
            }
            return {
                listData,
                navToshow,
                navToAddTings,
            }
        }
    })
</script>

<style lang="scss" scoped>
    .listHeader{
        margin:0 0 20px 0;
    }
</style>
