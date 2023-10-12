import { createApp } from "vue";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import router from "./router";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.component("EasyDataTable", Vue3EasyDataTable);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(router).use(vuetify).mount("#app");
