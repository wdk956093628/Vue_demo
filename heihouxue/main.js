import Vue from "vue";
import App from "./template/app.vue";
import "./index.css";

let config = {
  render:h=>h(App)
}

const vm = new Vue(config);
vm.$mount("#myApp");
