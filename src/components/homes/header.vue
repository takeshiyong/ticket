<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont left">&#xe624;</span>
        </div>
        <div class="header-search">
            <span class="iconfont search">&#xe632;</span>
            输入城市/景点/游戏主题</div>
        <div class="header-right">{{this.city}}
            <span class="iconfont city">&#xe64a;</span>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        city: String
    }
}
</script>

<style lang="less" scoped>
@import '~styles/common.less';
    .header{
        display: flex;
        height: .86rem;
        background: @bgcolor;
        line-height: .86rem;
        color: #fff;
        .header-left{
            width: .64rem;
            float: left;
            text-align: center;
            .left{
                margin-left: .2rem;
            }
        }
        .header-search{
            flex: 1;
            height: .64rem;
            background: #fff;
            margin-top: .12rem;
            margin-left: .2rem;
            border-radius: .1rem;
            line-height: .64rem;
            color: #ccc;
            .search{
                padding-left: .2rem;
            }
        }
        .header-right{
            width: 1.24rem;
            float: right;
            text-align: center;
            .city{
                margin-left: .05rem;
            }
        }
    }
</style>
