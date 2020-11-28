import { createApp , } from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App.vue'
import store from './store'

const app = createApp(App)

axios.defaults.headers.common['Authorization'] = `Client-ID ${process.env.VUE_APP_SPLASH_APP_ACCESS_KEY}`;

app.use(Vuex)
app.use(store)

app.mount('#app')

