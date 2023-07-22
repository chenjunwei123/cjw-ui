<!--
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 14:20:25
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 15:42:36
 * @FilePath: \前端\cjw-ui\src\components\switch\index.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <label :for="name" class="cjw-switch" :class="{'is-checked':value}" @click="handleClick">
    <input type="checkbox" :name="name" class="cjw-switch_input" ref="input">
    <span class="cjw-switch_core" ref="core">
      <span class="cjw-switch_button"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'cjw-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
    }
  },
  mounted () {

  },
  watch: {
    // 监听value的改变
    value () {
      if (this.activeColor || this.inActiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.backgroundColor = color
      }
      this.$refs.input.checked = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.cjw-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .cjw-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #ff4949;
    // background-color: #ff4949;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .cjw-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
  }
  // 选中样式
  .is-checked {
      .cjw-switch_button {
        transform: translateX(20px);
      }
    }
  // 隐藏input标签
  .cjw-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>
