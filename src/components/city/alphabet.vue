<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) of cities"
      :key="item.id"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "Alphabet",
  props: {
    cities: Object
  }
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: @bgcolor;
  }
}
</style>
