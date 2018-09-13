<template>
  <li>{{ todo.text }}</li>
</template>

<script>
module.exports = {
  props: ["todo"],
};
</script>

<style lang="less" scoped>
@import "./color.less";
li {
  font-size: 1em;
  color: @red;
}
</style>
