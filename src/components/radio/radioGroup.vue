<!--
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 17:00:58
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 17:24:30
 * @FilePath: \前端\cjw-ui\src\components\radio\radioGroup.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cjw-radio-group',
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
