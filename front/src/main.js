import 'bootstrap/dist/css/bootstrap.css';
import './config/axios.js';

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
