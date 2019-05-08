<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont left">&#xe624;</span>
    </div>
    <div class="header-search">
      <span class="iconfont search">&#xe632;</span>
      输入城市/景点/游戏主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont city">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "Vuex";
export default {
  computed:{
    ...mapState(['city'])
  }
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
.header {
  display: flex;
  height: 0.86rem;
  background: @bgcolor;
  line-height: 0.86rem;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
    .left {
      margin-left: 0.2rem;
    }
  }
  .header-search {
    flex: 1;
    height: 0.64rem;
    background: #fff;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    line-height: 0.64rem;
    color: #ccc;
    .search {
      padding-left: 0.2rem;
    }
  }
  .header-right {
    min-width: 1.24rem;
    padding: 0 .1rem; 
    float: right;
    text-align: center;
    color: #fff;
    .city {
      
      margin-left: -.04rem;
      font-size: .24rem;
    }
  }
}
</style>
