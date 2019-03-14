<template>
  <div id="vue-app">
    <todo-list></todo-list>
    <counter></counter>
  </div>
</template>

<script>
import Counter from "./counter.js";
import TodoList from "./todo_list.vue";
module.exports = {
  components: {
    TodoList,
    Counter
  }
};
</script>
