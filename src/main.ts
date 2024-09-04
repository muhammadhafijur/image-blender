import "./assets/main.css";

import { inject } from "@vercel/analytics";
import { createPinia } from "pinia";
import { createApp } from "vue";

inject();

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
