import { createApp } from 'vue'
import './style.css'
import 'virtual:uno.css'
import 'virtual:unocss-devtools'

import DevUI from 'vue-devui'
import 'vue-devui/style.css'
import '@devui-design/icons/icomoon/devui-icon.css'
import { ThemeServiceInit, infinityTheme } from 'devui-theme'

import App from './App.vue'

ThemeServiceInit({ infinityTheme }, 'infinityTheme')

createApp(App).use(DevUI).mount('#app')
