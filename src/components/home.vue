<template>
  <div>
    <homeHeader :city="city"/>
    <swiper :swiperList="swiperList"/>
    <icons :iconList="iconList"/>
    <recommend :recommendList="recommendList"/>
    <weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import homeHeader from "./homes/header.vue";
import swiper from "./homes/swiper.vue";
import icons from "./homes/icons.vue";
import recommend from "./homes/recommend.vue";
import weekend from "./homes/weekend.vue";
import axios from "axios";
export default {
  components: {
    homeHeader,
    swiper,
    icons,
    recommend,
    weekend
  },
  data() {
    return {
      city: "",
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList:[]
    };
  },
  methods: {
    getAxios() {
      axios
        .get("/api/index.json")
        .then(res => {
          console.log(res);
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.city = data.city;
            this.iconList = data.iconList;
            this.swiperList = data.swiperList;
            this.recommendList = data.recommendList;
            this.weekendList = data.weekendList
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },
  mounted() {
    this.getAxios();
  }
};
</script>

<style>
</style>

