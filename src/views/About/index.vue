<template>
  <div class="about">
    <a-row type="flex" justify="center" :gutter="40">
      <a-col :span="12">
        <a-tabs default-active-key="1" tab-position="left">
          <a-tab-pane key="1" tab="个人资料：">
            <a-form  :wrapperCol="{span:20}">
              <a-form-item label="昵称：">
                <a-input/>
              </a-form-item>
              <a-form-item label="性别：">
                <a-input/>
              </a-form-item>
              <a-form-item label="出生：">
                <a-input/>
              </a-form-item>
              <a-form-item>
                <a-row type="flex" justify="center" :gutter="20">
                  <a-col :span="12">
                    <a-button block type="primary">保存</a-button>
                  </a-col>
                </a-row>
              </a-form-item>
            </a-form>
          </a-tab-pane>
          <a-tab-pane key="2" tab="账号设置：">
            <a-form  :wrapperCol="{span:20}">
              <a-form-item label="手机：">
                <a-input/>
              </a-form-item>
              <a-form-item label="密码：">
                <a-input/>
              </a-form-item>
              <a-form-item>
                <a-row type="flex" justify="center" :gutter="20">
                  <a-col :span="12">
                    <a-button block type="primary">保存</a-button>
                  </a-col>
                </a-row>
              </a-form-item>
            </a-form>
          </a-tab-pane>
          <a-tab-pane key="3" tab="其他设置：">
            <a-button>房子设置</a-button>
            <a-button>标签设置</a-button>
            <a-button>人员设置</a-button>
          </a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :span="4">
        <p>头像(点击更换)：</p>
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
