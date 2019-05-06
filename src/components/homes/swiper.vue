<template>
  <swiper :options="swiperOption" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="item of swiperSlides" :key="item.id">
      <img :src="item.src" alt>
    </swiper-slide>
    
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true
      },
      swiperSlides:[
          {id: 1, src: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e9f92741ef8b1cb0472ced96150d0d1c.jpg_750x200_1f0a2392.jpg"},
          {id: 2, src: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"}
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.swiper /deep/ .swiper-pagination-bullet-active {
  background: #ffffff !important; 
}
.swiper {
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 26.66%;
  background-color: #cccccc;
  img {
    width: 100%;
  }
}
</style>
