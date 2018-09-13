<template>
  <li class="todo-item">{{ todo.text }}</li>
</template>

<script>
module.exports = {
  props: ["todo"],
};
</script>

<style scoped>
.todo-item {
  font-size: 1em;
  text-align: center;
}
</style>
