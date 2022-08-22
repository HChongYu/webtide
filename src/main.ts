import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// import './style.css';

import App from './App.vue';
import router from './router';



const pinia = createPinia();

const app = createApp(App);
app.use(ElementPlus).use(router).use(pinia);

app.mount('#app');
