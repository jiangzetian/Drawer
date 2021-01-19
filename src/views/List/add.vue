<template>
    <a-row type="flex" justify="center">
        <a-col :sm="24" :md="10">
            <a-form :model="form" :rules="rules" ref="formDom" :wrapperCol="{span:24}" layout="vertical" >
                <a-form-item label="名称：" name="name">
                    <a-input v-model:value="form.name" autocomplete="off" />
                </a-form-item>
                <a-form-item label="房子：" name="house">
                    <a-select v-model:value="form.house" placeholder="">
                        <a-select-option value="1">
                            房子一
                        </a-select-option>
                        <a-select-option value="2">
                            房子二
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="位置：" name="position">
                    <a-input v-model:value="form.position" autocomplete="off"/>
                </a-form-item>
                <a-form-item label="描述：" name="desc">
                    <a-input v-model:value="form.desc" autocomplete="off"/>
                </a-form-item>
                <a-form-item label="标签：" name="tages">
                    <DynamicTags :maxLength="3" :inputMaxLenght="6" @change="tagsChange" />
                </a-form-item>
                <a-form-item label="物品：" name="things">
                    <DynamicInput @change="thingsChange" />
                </a-form-item>
                <a-form-item>
                    <a-row type="flex" justify="center" :gutter="20">
                        <a-col :span="6">
                            <a-button block type="primary" @click="onSubmit">保存</a-button>
                        </a-col>
                    </a-row>
                </a-form-item>
            </a-form>
        </a-col>
    </a-row>

</template>

<script lang="ts">
    import {ref} from 'vue'
    import {PlusOutlined,MinusOutlined} from '@ant-design/icons-vue';
    import DynamicTags from '@/components/DynamicTags/index.vue'
    import DynamicInput from '@/components/DynamicInput/index.vue'
    export default {
        components: {
            DynamicTags,
            DynamicInput
        },
        setup(){
            //输入框Dom
            const formDom: any = ref(null);
            const form = ref({
                name:'',
                house:'',
                position:'',
                desc:'',
                tags:[],
                things:[],
            });
            const rules= ref({
                name: [
                    {required: true,message: '请输入收纳区名称', trigger: 'blur'},
                    {min:1, max: 8, message: '收纳区名称3~8长度', trigger: 'blur'},
                ],
                house:[
                    {required: true,message: '请选择收纳区所在房子', trigger: 'blur'},
                ],
                position:[
                    {required: true,message: '请输入收纳区所在位置', trigger: 'blur'},
                ],
                desc:[
                    {required: true,message: '请输入收纳区描述文字', trigger: 'blur'},
                    {min:1, max: 15,message: '收纳区描述1~15长度', trigger: 'blur'},
                ],
                // things:[
                //     {required: true,message: '请输入收纳区物品', trigger: 'blur'},
                // ],
            })

            const tagsChange = (e: any)=>{
                form.value.tags = e;
                console.log(e)
            }
            const thingsChange = (e: any) =>{
                form.value.things = e;
                console.log(e)
            }

            const onSubmit = ()=>{
                formDom.value.validate()
                    .then(() => {
                        console.log('values',form.value);
                    })
                    .catch((error: any )=> {
                        console.log('error', error);
                    });
            }


            return {
                formDom,
                rules,
                form,
                tagsChange,
                thingsChange,
                onSubmit,
            }
        }
    }
</script>

<style lang="scss" scoped>
.item-row{
    margin: 10px 0;
}
</style>
