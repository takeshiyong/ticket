<template>
  <div class="head">
    <router-link 
    to="/"
    class="out"
    v-show="showA"
    >
      <span class="iconfont left">&#xe624;</span>
    </router-link>
    <div 
    class="header"
    v-show="!showA"
    :style="opacityStyle"
    >
      乌镇
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont left">&#xe624;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showA: true,
      opacityStyle: { 
        opacity : 0
      }
      // opacity : 0
    }
  },
  methods:{
    handleScroll(){
      const top = document.documentElement.scrollTop;
      if(top > 50){
        let opacity = top / 100;
        opacity > 1 ? 1 :opacity;
        this.opacityStyle={ opacity }
        this.showA = false
      }else{
        this.showA = true;
      }
    }
  },
  activated(){
    window.addEventListener("scroll",this.handleScroll)
  }
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
.head{
    .out{
    position: absolute;
    left: .2rem;
    top: .2rem;
    display: block;
    width: .72rem;
    line-height: .72rem;
    text-align: center;
    border-radius: .36rem;
    background: rgba(0,0,0,.5);
    span{
      color: #fff;
      
    }
  }
  .header {
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 0.86rem;
    background: @bgcolor;
    font-size: 0.32rem;
    color: #fff;
    text-align: center;
    line-height: 0.86rem;
    .header-left {
      position: absolute;
      left: 0;
      top: 0;
      width: 0.64rem;
      color: #fff;
    }
  }
}
  

</style>
