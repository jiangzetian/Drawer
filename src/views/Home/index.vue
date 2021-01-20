<template>
  <div class="home">
    <section style="width: 50%">
      <DynamicUpload @change="changeUpload"/>
    </section>
  </div>
</template>

<script lang="ts">
  import {ref} from 'vue';
  import {HomeOutlined} from '@ant-design/icons-vue';
  import DynamicUpload from '@/components/DynamicUpload/index.vue'

  export default {
    components: {
      DynamicUpload
    },
    setup(){
      const search = ref('');
      const changeUpload = (e: any) =>{
        console.log(e)
      }
      return {
        search,
        changeUpload
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
