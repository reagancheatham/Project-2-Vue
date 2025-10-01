import { createApp } from 'vue';
import './global.css';
import App from './App.vue';
import vuetify from "../plugins/vuetify.js";

const app = createApp(App);
app.use(vuetify);

app.mount('#app');