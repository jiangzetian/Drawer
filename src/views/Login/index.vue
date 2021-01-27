<template>
    <a-row class="layout" type="flex" justify="center" align="middle">
        <div class="loginCard">
            <div class="loginImg"></div>
            <div class="loginInput">
                <a-tabs class="tabs">
                    <a-tab-pane key="1" tab="验证码登录">
                        <a-form :wrapperCol="{span:24}">
                            <a-form-item>
                                <a-input placeholder="手机"/>
                            </a-form-item>
                            <a-form-item>
                                <a-row type="flex" align="middle"  :gutter="20">
                                    <a-col :span="16"><a-input placeholder="验证码"/></a-col>
                                    <a-col :span="7"><a-button shape="round">发送验证码</a-button></a-col>
                                </a-row>
                            </a-form-item>
                            <a-row type="flex" justify="center" :gutter="20">
                                <a-button shape="round" type="primary" size="large" style="width:300px;">登录</a-button>
                            </a-row>
                        </a-form>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="账号登录">
                        <a-form :wrapperCol="{span:24}">
                            <a-form-item>
                                <a-input placeholder="账号"/>
                            </a-form-item>
                            <a-form-item>
                                <a-input placeholder="密码"/>
                            </a-form-item>
                            <a-row type="flex" justify="center" :gutter="20">
                                <a-button shape="round" type="primary" size="large" style="width: 300px;">登录</a-button>
                            </a-row>
                        </a-form>
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
    </a-row>
</template>

<script lang="ts">
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .layout{
        width: 100%;
        height: 100%;
        background: #F5F5FA;
        .loginCard{
            background: #fff;
            width: 100%;
            height: 100%;
            max-width: 1000px;
            max-height: 550px;
            display: flex;
            justify-content: space-between;
        }
        .loginImg{
            background: #1890FF;
            width: 40%;
        }
        .loginInput{
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .tabs{
            width: 100%;
            height: 280px;
            max-width: 380px;
        }
    }
    ::v-deep .ant-tabs-nav-scroll{
        display: flex;
        justify-content: center;
    }
</style>
