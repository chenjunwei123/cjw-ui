<!--
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-18 21:30:08
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 18:31:13
 * @FilePath: \前端\cjw-ui\src\App.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div id="app">
    <!-- <div class="row">
      <cjw-button @click="fn" type="primary">111</cjw-button>
      <cjw-button type="success">111</cjw-button>
      <cjw-button type="warning">111</cjw-button>
      <cjw-button type="danger">111</cjw-button>
      <cjw-button type="info">111</cjw-button>
    </div>
    <div class="row">
      <cjw-button plain type="primary">111</cjw-button>
      <cjw-button plain type="success">111</cjw-button>
      <cjw-button plain type="warning">111</cjw-button>
      <cjw-button plain type="danger">111</cjw-button>
      <cjw-button plain type="info">111</cjw-button>
    </div>
    <div class="row">
      <cjw-button round type="primary">111</cjw-button>
      <cjw-button round type="success">111</cjw-button>
      <cjw-button round type="warning">111</cjw-button>
      <cjw-button round type="danger">111</cjw-button>
      <cjw-button round type="info">111</cjw-button>
    </div>
    <div class="row">
      <cjw-button circle type="primary">111</cjw-button>
      <cjw-button circle type="success">111</cjw-button>
      <cjw-button circle type="warning">111</cjw-button>
      <cjw-button circle type="danger">111</cjw-button>
      <cjw-button circle type="info">111</cjw-button>
    </div>
    <div class="row">
      <cjw-button circle icon="icon-yinsibaohu" type="primary"></cjw-button>
      <cjw-button circle icon="icon-yinsibaohu" type="success"></cjw-button>
      <cjw-button circle icon="icon-yinsibaohu" type="warning"></cjw-button>
      <cjw-button circle icon="icon-yinsibaohu" type="danger"></cjw-button>
      <cjw-button circle icon="icon-yinsibaohu" type="info"></cjw-button>
    </div>
    <div class="row">
      <cjw-button round disabled type="primary">111</cjw-button>
      <cjw-button round disabled type="success">111</cjw-button>
      <cjw-button round disabled type="warning">111</cjw-button>
      <cjw-button round type="danger">111</cjw-button>
      <cjw-button round type="info">111</cjw-button>
    </div> -->

    <!-- dialogU组件 -->
    <!-- <cjw-button type="primary" @click="visible = !visible">toggle</cjw-button>
    <cjw-dialog width="50%" marginTop="25vh" :visible.sync="visible">
      <template v-slot:content>
        <span>这是我自己定义的</span>
      </template>
      <template v-slot:footer>
        <cjw-button round @click="visible=false">取消</cjw-button>
        <cjw-button round type="primary" @click="visible=false">确定</cjw-button>
      </template>
    </cjw-dialog> -->
    <!-- input组件 -->
    <!-- <cjw-input :value="username" @input="username=$event.target.value"></cjw-input> -->
    <!-- <cjw-input placeholder="请输入用户名" type="password" clearable v-model="username"></cjw-input>
    <cjw-input placeholder="请输入用户名" type="password" v-model="username"></cjw-input>
    <cjw-input placeholder="请输入用户名" type="password" show-password v-model="username"></cjw-input> -->
    <!-- <span>{{ username }}</span> -->
    <!-- <input type="text"> -->

    <!-- switch组件 -->
    <!-- <cjw-switch v-model="active" active-color="#13ce66" inactive-color="#ff4949" name="username"></cjw-switch> -->

    <!-- radio组件 -->
    <!-- <cjw-radio v-model="gender" label="0">男</cjw-radio>
    <cjw-radio v-model="gender" label="1">女</cjw-radio> -->
    <!-- <cjw-radio v-model="gender" label="1"></cjw-radio>
    <cjw-radio v-model="gender" label="1"></cjw-radio> -->

    <!-- <cjw-radio-group v-model="gender">
        <cjw-radio label="0">男</cjw-radio>
        <cjw-radio label="1">女</cjw-radio>
    </cjw-radio-group>
    <cjw-radio label="0">男</cjw-radio>
    <cjw-radio label="1">女</cjw-radio> -->

    <input type="radio" name="fruit" value="apple">1
<input type="radio" name="fruit" value="banana">2
<input type="radio" name="fruit" value="orange">3
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      visible: false,
      username: '',
      active: false,
      gender: '0'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .cjw-button {
    margin-right: 20px;
  }
}
#app {
  .cjw-input {
  width: 180px;
}
}
</style>
