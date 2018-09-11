import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./hello_message";
import Vue from "vue";

const mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="world" />, mountNode);

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

new Vue({
  el: "#vue-app",
  data: {
    groceryList: [{ id: 0, text: "Vegetables" }, { id: 1, text: "Cheese" }, { id: 2, text: "Whatever else humans are supposed to eat" }],
  },
});
