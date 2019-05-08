<template>
  <div class="banner">
    <div class="banner-img">
      <img
        class="banner-img-ban"
        src="//img1.qunarzz.com/sight/p0/1603/5d/5dd523afbdbb037c90.water.jpg_600x330_5349106d.jpg"
        alt
      >
    </div>
    <div class="out">
      <span class="iconfont left">&#xe624;</span>
    </div>
    <div class="banner-con">
      <div class="banner-title">乌镇(AAAA景区)</div>
      <div class="banner-num">
        <span class="iconfont city">&#xe616;</span>39
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.banner {
  overflow: hidden;
  position: relative;
  height: 0;
  padding-bottom: 55%;
  .banner-img-ban {
    width: 100%;
  }
  .banner-con {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 0.6rem;
    color: #ffffff;
    .banner-title {
      flex: 1;
      text-indent: 0.2rem;
      font-size: 0.36rem;
    }
    .banner-num {
      padding: 0 0.4rem;
      line-height: 0.4rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
    }
  }
  .out {
    position: absolute;
    color: #ffffff;
    top: 0.2rem;
    left: 0.2rem;
    width: 0.72rem;
    line-height: 0.72rem;
    text-align: center;

    background: rgba(0, 0, 0, 0.5);
    border-radius: 0.36rem;
  }
}
</style>
