<template>
    <!--操作-->
    <a-row class="listHeader" type="flex" justify="end" align="middle">
        <a-row class="Btn-row">
            <a-button type="primary" @click="navToshow">返回列表</a-button>
        </a-row>
    </a-row>
    <!--表单-->
    <a-row type="flex" justify="center">
        <a-col :sm="24" :md="10">
            <a-divider orientation="left">
                添加收纳区
            </a-divider>
            <a-form :model="form" :rules="rules" ref="formDom" :wrapperCol="{span:24}" layout="vertical" >
                <a-form-item label="绑定收纳用品：">
                    <a-space direction="vertical" style="width: 100%">
                        <a-row :span="24">
                            <a-tag color="success">
                                <template #icon>
                                    <exclamation-circle-outlined />
                                </template>
                                打开小程序扫码绑定更方便
                            </a-tag>
                        </a-row>
                        <a-row type="flex" align="middle"  :gutter="20">
                            <a-col :span="18"><a-input placeholder="收纳用品编码"/></a-col>
                            <a-col :span="6"><a-button shape="round">立即绑定</a-button></a-col>
                        </a-row>
                    </a-space>
                </a-form-item>
                <a-form-item label="收纳区的名称：" name="name">
                    <a-input v-model:value="form.name" autocomplete="off" />
                </a-form-item>
                <a-form-item label="收纳区所在房子：" name="house">
                    <a-select v-model:value="form.house" placeholder="">
                        <a-select-option value="1">
                            房子一
                        </a-select-option>
                        <a-select-option value="2">
                            房子二
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="收纳区的位置：" name="position">
                    <a-input v-model:value="form.position" autocomplete="off"/>
                </a-form-item>
                <a-form-item label="收纳区的描述：" name="desc">
                    <a-input v-model:value="form.desc" autocomplete="off"/>
                </a-form-item>
                <a-form-item label="收纳区的标签：" name="tages">
                    <DynamicTags :maxLength="3" :inputMaxLenght="6" @change="tagsChange" />
                </a-form-item>
                <DynamicUpload :fileList="[{uid:1111,url:'https://via.placeholder.com/150?text=1'},{uid:1112,url:'https://via.placeholder.com/150?text=2'}]" @change="changeUpload"/>
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
    import {useRouter} from 'vue-router'
    import {PlusOutlined,MinusOutlined,ExclamationCircleOutlined} from '@ant-design/icons-vue';
    import DynamicUpload from '@/components/DynamicUpload/index.vue'
    import DynamicTags from '@/components/DynamicTags/index.vue'
    export default {
        components: {
            DynamicUpload,
            DynamicTags,
            ExclamationCircleOutlined
            // DynamicInput
        },
        setup(){
            const router = useRouter();

            //输入框Dom
            const formDom: any = ref(null);
            //表单数据
            const form = ref({
                name:'',
                house:'',
                position:'',
                desc:'',
                tags:[],
                things:[],
            });
            //验证数据
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

            //跳转
            const navToshow = ()=>{
                router.push({path:'/list/show'})
            }
            //标签
            const tagsChange = (e: any)=>{
                form.value.tags = e;
                console.log(e)
            }
            //物品
            const thingsChange = (e: any) =>{
                form.value.things = e;
                console.log(e)
            }
            //提交
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
                navToshow,
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
