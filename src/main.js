import { createApp } from 'vue'
import App from './App.vue'
import '../css/style.css'
import {router} from'./router'
import {store} from'../store.js'

let app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

//ここを上記に修正したらrouterが機能した
//createApp(App).mount('#app')
//App.use(router)