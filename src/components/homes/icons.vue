<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icons-img">
            <img class="icons-img-com" :src="item.imgurl" alt>
          </div>
          <p class="icons-com">{{item.name}}</p>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconsList: [
        {
          id: "001",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          name: "七日游"
        },
        {
          id: "002",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          name: "七日游"
        },
        {
          id: "003",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          name: "七日游"
        },
        {
          id: "004",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          name: "七日游"
        },
        {
          id: "005",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          name: "七日游"
        },
        {
          id: "006",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          name: "七日游"
        },
        {
          id: "007",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          name: "七日游"
        },
        {
          id: "008",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          name: "七日游"
        },
        {
          id: "009",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          name: "七日游"
        }
      ]
     
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconsList.forEach((element, index) => {
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
