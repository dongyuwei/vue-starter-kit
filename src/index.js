import Vue from "vue";
import App from "./app.vue";

const el = document.createElement("div");
el.id = "app";
document.body.appendChild(el);

new Vue({
  el: "#app",
  render: h => h(App),
});
