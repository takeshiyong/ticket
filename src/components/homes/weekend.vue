<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-set">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Homeweekend",
  props: {
    weekendList: Array
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eeeeee;
  text-indent: 0.2rem;
}

.item-img-set {
  height: 0;
  padding-bottom: 37.09%;
  overflow: hidden;
  .item-img {
    width: 100%;
  }
}
.item-info {
    padding: .1rem;
    .item-title {
        line-height: 0.54rem;
        font-size: .32rem;
        .ellipsis;
    }
    .item-desc{
        line-height: .4rem;
        color: #ccc;
        .ellipsis;
        
    }
  }
</style>
