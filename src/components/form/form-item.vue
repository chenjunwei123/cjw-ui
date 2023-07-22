<template>
  <div class="cjw-form-item">
    <label class="cjw-form-item_label" :style="labelStyle">{{ label }}</label>
    <div class="cjw-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cjw-form-item',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  // inject: {
  //   form: {
  //     default: ''
  //   }
  // },
  inject: ['form'],
  computed: {
    labelStyle () {
      return {
        width: this.form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cjw-form-item{
    margin-bottom: 25px;
    .cjw-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .cjw-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
</style>
