<template>
  <div class="banner">
    <div class="banner-img">
      <img
        class="banner-img-ban"
        :src="bannerImg"
        alt
      >
    </div>
    <div class="banner-con">
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-num">
        <span class="iconfont city">&#xe616;</span>39
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  }
};
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
 
}
</style>
