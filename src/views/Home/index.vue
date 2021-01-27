<template>
  <div class="home">
    <section style="width: 50%">
    </section>
  </div>
</template>

<script lang="ts">
  import {ref} from 'vue';
  import {HomeOutlined} from '@ant-design/icons-vue';

  export default {
    components: {
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
