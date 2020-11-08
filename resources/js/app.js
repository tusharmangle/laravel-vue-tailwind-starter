require("./bootstrap");

import { createApp } from "vue";

// Root App
import App from "./components/App.vue";
import init from "./helpers/init";

// Vue Router
import router from "./router";

// Vuex Store
import store from "./store";

// Initial Setup -> You can emit an actions from store to load the data

init();

// root app instance
const app = createApp(App);

// Mountin an app
app.use(store).use(router).mount("#app");
