import {ref,watch} from 'vue'
import { message } from 'ant-design-vue';

export default function dynamicInput(props: any,context: any) {
    const data: any = ref([])
    //添加输入
    const addInput = ()=>{
        data.value.push({
            name:'',
            count:1,
        });
    };
    //输入框失去焦点
    const inputBlur = (e: string)=>{
        if(!e){
            message.config({
                maxCount:1,
            });
            message.error('请输入内容');
            return false;
        }
        return true;
    }
    //输入框添加按钮
    const ItemInputAddBtn = (index: number)=>{
        if(inputBlur(data.value[index].name)){
            data.value.push({
                name:'',
                count:1,
            });
        }
    };
    //输入框删除按钮
    const ItemInputDelBtn = (index: number)=>{
        data.value.splice(index,1);
    };

    watch(data.value, (newValue: any, oldValue: any) => {
        context.emit('change',[...newValue])
    });

    return {
        data,
        addInput,
        ItemInputAddBtn,
        ItemInputDelBtn,
        inputBlur,
    }
}

