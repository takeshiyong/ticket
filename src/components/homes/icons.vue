<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icons-img">
            <img class="icons-img-com" :src="item.imgUrl" alt>
          </div>
          <p class="icons-com">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  props:{
    iconList: Array
  },
  data() {
    return {
      swiperOption:{
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((element, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(element);
      });
      return pages;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
  padding-top: .2rem;
}
.icon {
  float: left;
  position: relative;
  overflow: hidden;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  .icons-img {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;

    .icons-img-com {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
  .icons-com {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    height: 0.44rem;
    line-height: 0.44rem;
    color: @fontcolor;
    .ellipsis()
  }
}
</style>
