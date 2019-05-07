<template>
    <div class="search">
        <input type="text" name="" id="" placeholder="输入城市名或拼音" class="search-con">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "~styles/common.less";
.search{
    height: 0.72rem;
    background: @bgcolor;
    padding: .1rem .2rem;
    overflow: hidden;
    box-sizing: border-box;
    .search-con{
        height: 100%;
        width: 100%;
        border-radius: .1rem;
        text-align: center;
        color: #666;
    }   
}
</style>
