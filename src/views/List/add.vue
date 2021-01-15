<template>
    <a-row type="flex" justify="center">
        <a-col :sm="24" :md="10">
            <a-form :model="form" layout="vertical" :wrapperCol="{span:24}">
                <a-form-item label="名称：">
                    <a-input v-model:value="form.name" />
                </a-form-item>
                <a-form-item label="房子：">
                    <a-select v-model:value="form.house" placeholder="">
                        <a-select-option value="1">
                            房子一
                        </a-select-option>
                        <a-select-option value="2">
                            房子二
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="位置：">
                    <a-input v-model:value="form.position" />
                </a-form-item>
                <a-form-item label="描述：">
                    <a-input v-model:value="form.desc" />
                </a-form-item>
                <a-form-item label="标签：(按下回车键可添加一个标签)">
                    <a-space class="tags" style="margin-bottom: 10px;">
                        <a-tag color="blue" v-for="(item,index) in form.tags" :key="index">{{item}}</a-tag>
                    </a-space>
                    <a-input v-model:value="tag" @pressEnter="addTag" />
                </a-form-item>
                <a-form-item label="物品：">
                    <a-row class="item-row" :gutter="20"  v-for="(item,index) in 4" :key="index">
                        <a-col :span="16">
                            <a-input v-model:value="form.desc" />
                        </a-col>
                        <a-col :span="4">
                            <a-input-number  :value="1" :min="1" :defaultValue="1" />
                        </a-col>
                        <a-col :span="4">
                            <a-space>
                                <a-button type="danger" shape="circle">
                                    <template #icon><MinusOutlined /></template>
                                </a-button>
                                <a-button type="primary" shape="circle" v-if="index===3">
                                    <template #icon><PlusOutlined /></template>
                                </a-button>
                            </a-space>
                        </a-col>
                    </a-row>
                </a-form-item>
                <a-form-item>
                    <a-row type="flex" justify="center" :gutter="20">
                        <a-col :span="6">
                            <a-button block type="primary">保存</a-button>
                        </a-col>
                    </a-row>
                </a-form-item>
            </a-form>
        </a-col>
    </a-row>

</template>

<script>
    import {ref} from 'vue'
    import {PlusOutlined,MinusOutlined} from '@ant-design/icons-vue';
    export default {
        components: {
            PlusOutlined,
            MinusOutlined
        },
        setup(){
            const form = ref({
                name:'',
                house:'',
                position:'',
                desc:'',
                tags:[],
                things:[],
            });
            const tag = ref('');
            const addTag = () =>{
                if(tag.value.trim()){
                    form.value.tags.push(tag.value)
                }
                tag.value = '';
            }
            return {
                form,
                tag,
                addTag,
            }
        }
    }
</script>

<style lang="scss" scoped>
.item-row{
    margin: 10px 0;
}
</style>
