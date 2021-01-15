<template>
    <!--操作-->
    <a-row class="listHeader" type="flex" justify="space-between" align="middle">
        <a-row class="select-row">
            <a-dropdown>
                <template #overlay>
                    <a-menu>
                        <a-menu-item key="1"><UserOutlined />房子一</a-menu-item>
                        <a-menu-item key="2"><UserOutlined />房子二</a-menu-item>
                    </a-menu>
                </template>
                <a-button style="margin-left: 8px"> 房子一 <DownOutlined /> </a-button>
            </a-dropdown>
        </a-row>
        <a-row class="Btn-row">
            <a-button type="primary" @click="navToAdd">添加收纳区</a-button>
        </a-row>
    </a-row>
    <!--列表-->
    <a-list  :grid="{ gutter: 20, xs: 1, sm: 2, md: 3, lg: 4 }"  :data-source="listData">
        <template #renderItem="{ item, index }">
            <a-list-item>
                <a-card hoverable size="small"  :title="item.title+index">
                    <template #extra><a href="#">查看</a></template>
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
                        <a-descriptions-item label="位置">
                            杂物间白色收纳箱
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
    import {ref} from 'vue'
    import {DownOutlined,UserOutlined} from '@ant-design/icons-vue';
    import {useRouter} from 'vue-router'
    export default {
        components: {
            DownOutlined,
            UserOutlined
        },
        setup(){
            const router = useRouter();
            const listData = ref([
                {
                    title: '仓库',
                },
                {
                    title: '仓库',
                },
                {
                    title: '仓库',
                },
                {
                    title: '仓库',
                },
                {
                    title: '仓库',
                },
                {
                    title: '仓库',
                },
                {
                    title: '仓库',
                },
                {
                    title: '仓库',
                },
            ]);
            const navToAdd = ()=>{
                router.push({path:'/list/add'})
            }
            return {
                listData,
                navToAdd
            }
        }
    }
</script>


<style lang="scss" scoped>
    .listHeader{
        margin:0 0 20px 0;
    }
</style>
