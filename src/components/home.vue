<template>
  <div>
    <homeHeader/>
    <swiper :swiperList="swiperList"/>
    <icons :iconList="iconList"/>
    <recommend :recommendList="recommendList"/>
    <weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import { mapState } from 'Vuex';
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
      lastCity: '',
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList:[]
    };
  },
  computed:{
     ...mapState(['city'])
  },
  methods: {
    getAxios() {
      axios
        .get("/api/index.json?city=" + this.city)
        .then(res => {
          console.log(res);
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
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
    this.lastCity = this.city;
    this.getAxios();
  },
  activated() {
    if(this.lastCity !== this.city){
      this.lastCity = this.city;
      this.getAxios();
    }
  }
};
</script>

<style>
</style>

