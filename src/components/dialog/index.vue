<!--
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-21 21:56:13
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 12:28:56
 * @FilePath: \前端\cjw-ui\src\components\dialog\index.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <transition name="dialog-fade">
    <div class="cjw-dialog_wrapper" @click.self="handleClose" v-show="visible">
      <div class="cjw-dialog" :style="{width:width,marginTop:marginTop}">
        <div class="cjw-dialog_header">
          <slot name="title">
            <div class="cjw-dialog_title">{{ title }}</div>
          </slot>
          <button class="cjw-dialog_headerbtn" @click="handleClose">
            <i class="icon-lianmenglian"></i>
          </button>
        </div>
        <div class="cjw-dialog_body">
          <slot name="content">
            <span>这是一段提示</span>
          </slot>
        </div>
        <div class="cjw-dialog_footer">
          <slot name="footer">
            <cjw-button>取消</cjw-button>
            <cjw-button type="primary">确定</cjw-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'cjwDialog',
  props: {
    title: {
      type: [String, Number],
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    marginTop: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      // console.log(111)
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.cjw-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .cjw-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .cjw-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .cjw-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .icon-lianmenglian{
          color:#909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .cjw-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade .5s;
}
.dialog-fade-leave-active {
  animation: fade .5s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
