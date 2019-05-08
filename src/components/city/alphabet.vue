<template>
  <ul class="list">
    <li
      class="item"
      v-for="key of letters"
      :key="key"
      :ref="key"
      @click="handleclick"
      @touchstart.prevent="handleStart"
      @touchmove="handleMove"
      @touchend="handleEnd"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "Alphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      canChage: false,
      num: 0,
      timer: null
    };
  },
  updated() {
    this.num = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleclick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleStart() {
      this.canChage = true;
    },
    handleMove(e) {
      if (this.canChage) {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setTimeout(() => {
          const current = e.touches[0].clientY - 79;
          const index = Math.floor((current - this.num) / 20);
          if (index > 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 15);
      }
    },
    handleEnd() {
      this.canChage = false;
    }
  },
  computed: {
    letters() {
      const comm = [];
      for (let i in this.cities) {
        comm.push(i);
      }
      return comm;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: @bgcolor;
  }
}
</style>
