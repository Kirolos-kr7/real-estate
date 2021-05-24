import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import $ from "jquery";
$;
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import "./assets/fonts.scss";
import "./assets/style.scss";

createApp(App)
  .use(router)
  .mount("#app");
