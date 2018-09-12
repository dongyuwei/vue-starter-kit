import Vue from "vue";
import counter from "./counter.js";
import style from "./index.less";

Vue.component("todo-item", {
  props: ["todo"],
  template: `<li class="${style.foobar}">{{ todo.text }}</li> `,
});

const el = document.createElement("div");
el.innerHTML = `<div id="vue-app">
  <ol>
    <todo-item
      v-for="item in todoList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>

    <counter></counter>
  </ol>
</div>`;
document.body.appendChild(el);

new Vue({
  el: "#vue-app",
  data: {
    todoList: [{ id: 0, text: "write document" }, { id: 1, text: "coding" }, { id: 2, text: "sleep" }],
  },
  components: {
    counter,
  },
});
