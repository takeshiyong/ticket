<template>
  <div>
    <banner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"
    />
    <heade/>
    <div>
      <list :lists="lists"/>
    </div>
  </div>
</template>

<script>
import banner from "./detail/banner.vue";
import heade from "./detail/heade.vue";
import list from "./detail/list.vue";
import axios from "axios";
export default {
  data() {
    return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        lists: []
    };
  },
  components: {
    banner,
    heade,
    list
  },
  methods: {
    getDataInfo() {
        axios.get("/api/detail.json",{
            params:{
                id: this.$route.params.id
            }
        })
        .then(res => {
            console.log(res);
            const ress = res.data;
            if(ress.ret && ress.data){
                const data = ress.data;
                this.sightName = data.sightName;
                this.bannerImg = data.bannerImg;
                this.gallaryImgs = data.gallaryImgs;
                this.lists = data.categoryList;
            }
        })
    }
  },
  mounted() {
    this.getDataInfo();
  }
};
</script>

<style>
</style>
