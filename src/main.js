import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Bootstrap dependencies
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@fortawesome/fontawesome-svg-core"

createApp(App).use(store).use(router).mount("#app");
