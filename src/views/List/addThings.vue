<template>
    <!--操作-->
    <a-row class="listHeader" type="flex" justify="end" align="middle">
        <a-row class="Btn-row">
            <a-button type="primary" @click="navToDetailTings">返回收纳区</a-button>
        </a-row>
    </a-row>
    <a-row type="flex" justify="center">
        <a-col :sm="24" :md="10">
            <a-divider orientation="left">
                添加物品
            </a-divider>
        </a-col>
    </a-row>
</template>

<script>
    import {useRouter} from "vue-router";
    import {defineComponent} from "vue";

    export default defineComponent({
        setup(){
            const router = useRouter();

            //跳转
            const navToDetailTings = ()=>{
                router.push({path:'/list/detail'})
            }

            return{
                navToDetailTings
            }
        }
    })
</script>

<style scoped>

</style>
