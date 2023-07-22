<template>
  <label class="cjw-radio" :class="{'is-checked': label == model}">
    <span class="cjw-radio_input">
      <span class="cjw-radio_inner"></span>
      <input class="cjw-radio_original"
        type="radio"
        :name="name"
        :value="label"
        v-model="model"
        >
    </span>
    <span class="cjw-radio_label">
      <slot></slot>
      <!-- <template v-if="!$slots.default">
        {{ label }}
      </template> -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'cjw-radio',
  inject: {
    radioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set (value) {
        // this.$emit('input', value)
        this.isGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 判断radio是否被group包裹
    isGroup () {
      return this.radioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
  .cjw-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .cjw-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .cjw-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .cjw-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .cjw-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .cjw-radio.is-checked{
    .cjw-radio_input{
      .cjw-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .cjw-radio_label{
      color:#409eff;
    }
  }
</style>
