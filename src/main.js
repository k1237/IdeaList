import { createApp } from 'vue'
import App from './App.vue'
import '../css/style.css'
import {router} from'./router'

let app = createApp(App)
app.use(router)
app.mount('#app')

//ここを上記に修正したらrouterが機能した
//createApp(App).mount('#app')
//App.use(router)