<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont left">&#xe624;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
.header {
  position: relative;
  overflow: hidden;
  height: 0.86rem;
  background: @bgcolor;
  font-size: 0.32rem;
  color: #fff;
  text-align: center;
  line-height: 0.86rem;
  .header-left {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.64rem;
    color: #fff;
  }
}
</style>
