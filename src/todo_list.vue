<template>
  <ol>
    <todo-item
      v-for="item in todoList"
      :key="item.id"
      :todo="item"
    />
  </ol>
</template>

<script>
import TodoItem from "./todo_item.vue";
module.exports = {
  components: {
    TodoItem,
  },
  data() {
    return {
      todoList: [{ id: 0, text: "write document" }, { id: 1, text: "coding" }, { id: 2, text: "sleep" }],
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
