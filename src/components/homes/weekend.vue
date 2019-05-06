<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  data() {
    return {
      list: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首战，海洋的主题公园"
        },
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首战，海洋的主题公园"
        },
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1507/ab/1c456b9cbffc31.jpg_r_640x214_1c2552de.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首战，海洋的主题公园"
        }
      ]
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
  padding-bottom: 36.65%;
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
