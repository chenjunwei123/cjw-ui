<template>
  <div class="cjw-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cjw-form',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      form: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
