<template>
    <div class="clearfix">
        <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
                :file-list="lists"
                @preview="handlePreview"
                @change="handleChange"
        >
            <div v-if="lists.length < 4">
                <plus-outlined />
                <div class="ant-upload-text">上传</div>
            </div>
        </a-upload>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
    </div>
</template>

<script lang="ts">
    import {defineComponent,ref} from 'vue'
    import {PlusOutlined} from '@ant-design/icons-vue';

    function getBase64(file: any) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    export default defineComponent({
        components: {
            PlusOutlined,
        },
        emits:['change'],
        setup(props,context){
            const  previewVisible = ref(false);
            const  previewImage = ref('');
            const  lists: any = ref([])
            //关闭预览窗口
            const handleCancel = ()=>{
                previewVisible.value = false;
            }
            //打开预览窗口
            const handlePreview = async (file: any)=>{
                if (!file.url && !file.preview) {
                    file.preview = await getBase64(file.originFileObj);
                }
                previewImage.value = file.url || file.preview;
                previewVisible.value = true;
            }
            // 图片改变
            const handleChange = ({file,fileList}: any)=>{
                lists.value = fileList;
                if(file.status == 'done' || file.status == 'removed'){
                    context.emit("change", [...lists.value]);
                }
            }

            return {
                previewVisible,
                previewImage,
                lists,
                handleCancel,
                handleChange,
                handlePreview
            }
        }
    })
</script>

<style scoped>
    .ant-upload-select-picture-card i {
        font-size: 32px;
        color: #999;
    }
    .ant-upload-select-picture-card .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }
</style>
