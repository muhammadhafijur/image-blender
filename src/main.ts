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



const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;


function loadGoogleAnalytics() {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  };
}

loadGoogleAnalytics();



app.mount("#app");
