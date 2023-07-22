<!--
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 12:33:49
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 14:20:09
 * @FilePath: \前端\cjw-ui\src\components\input\index.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="cjw-input" :class="[{'cjw-input_suffix':showSuffix}]">
    <input class="cjw-input_inner" :class="[{'is-disabled':disabled}]"
    :placeholder="placeholder"
    :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
    :disabled="disabled"
    :name="name"
    :value="value"
    @input="handleInput"
    >
    <span class="cjw-input_suffix" v-if="showSuffix">
      <i class="cjw-input_icon icon-zhenshikexin" v-if="clearable && value" @click="handleClear"></i>
      <i class="cjw-input_icon icon-ouyuan" :class="{'icon-ouyuan-active':passwordVisible}" v-if="showPassword" @click="handleShowPassword"></i>
      <i></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'cjwInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClear () {
      this.$emit('input', '')
    },
    handleShowPassword () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  }
}
</script>

<style lang="scss" scoped>
.cjw-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .cjw-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;

      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .cjw-input_suffix{
    .cjw-input_inner{
      padding-right: 30px;
    }
    .cjw-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .icon-ouyuan-active {
        color: blue;
      }
    }
  }
</style>
