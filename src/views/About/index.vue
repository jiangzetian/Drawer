<template>
  <div class="about">
    <a-row type="flex" justify="center" align="middle" :gutter="20">
      <a-col :span="12">
        <a-tabs default-active-key="1" tab-position="left">
          <a-tab-pane key="1" tab="个人资料：">
            Content of Tab 1 ...
          </a-tab-pane>
          <a-tab-pane key="2" tab="账号设置：">
            Content of Tab 2 ...
          </a-tab-pane>
          <a-tab-pane key="3" tab="其他设置：">
            Content of Tab 3 ...
          </a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :span="4">
        <p>头像：</p>
        <a-upload
                name="avatar"
                list-type="picture-card"
                class="avatar-uploader"
                :show-upload-list="false"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        >
          <img v-if="true" style="width: 100%" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  alt="avatar" />
          <div v-else>
<!--            <loading-outlined v-if="false" />-->
<!--            <plus-outlined v-else/>-->
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
  // import {ref} from 'vue';
  export default {
    // setup(){
    //
    // }
  }
</script>

<style lang="scss" scoped>

</style>
