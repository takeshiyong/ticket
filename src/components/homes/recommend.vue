<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      list: [
        {
          id: "0001",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1511/57/57a1490e1b72901a90.img.jpg_200x200_84df18bd.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首战，海洋的主题公园"
        },
        {
          id: "0001",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1603/2f/2f171e53f017e8b390.water.jpg_200x200_9f77138f.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首战，海洋的主题公园"
        },
        {
          id: "0001",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1707/62/62981f052681ef5ba3.img.jpg_200x200_43d6d1e7.jpg",
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
.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      .ellipsis;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      .ellipsis;
    }
    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
