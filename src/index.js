import Vue from "vue";
import counter from "./counter.js";
import TodoList from "./todo_list.vue";

const el = document.createElement("div");
el.innerHTML = `<div id="vue-app">
  <todo-list></todo-list>
  <counter></counter>
</div>`;
document.body.appendChild(el);

new Vue({
  el: "#vue-app",
  components: { TodoList, counter },
});
