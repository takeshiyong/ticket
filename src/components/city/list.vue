<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
          class="button-wrapper" 
          v-for="item in hotCities" 
          :key="item.id" 
          @click="handleCityClick(item.name)"
         >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div 
      class="area" 
      v-for="(item, key) of cities" 
      :key="key"
      :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "Vuex";
import Bscroll from "better-scroll";
export default {
  name: "list",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (value) {
     this.changeCity(value);
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch:{
    letter(){
      const commont = this.$refs[this.letter][0];
      this.scroll.scrollToElement(commont);
    }
  },
  computed: {
    ...mapState(["city"])
  }
  
};
</script>

<style lang="less" scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.6rem;
    height: 0.6rem;
    text-indent: 0.2rem;
    color: #666;
    font-size: 0.26rem;
    background: #eee;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem;
    .button-wrapper {
      width: 33%;
      float: left;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 1px solid #ccc;
        border-radius: 0.1rem;
        text-align: center;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
