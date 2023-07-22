/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-18 21:30:08
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 16:23:24
 * @FilePath: \前端\cjw-ui\src\main.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import cjwButton from './components/button/index.vue'
import cjwDialog from './components/dialog/index.vue'
import cjwInput from './components/input/index.vue'
import cjwSwitch from './components/switch/index.vue'
import cjwRadio from './components/radio/index.vue'
import cjwRadioGroup from './components/radio/radioGroup.vue'
// import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.component(cjwButton.name, cjwButton)
Vue.component(cjwDialog.name, cjwDialog)
Vue.component(cjwInput.name, cjwInput)
Vue.component(cjwSwitch.name, cjwSwitch)
Vue.component(cjwRadio.name, cjwRadio)
Vue.component(cjwRadioGroup.name, cjwRadioGroup)
new Vue({
  render: h => h(App)
}).$mount('#app')
