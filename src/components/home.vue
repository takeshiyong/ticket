<template>
    <div>
        <homeHeader/>
        <swiper/>
        <icons/>
        <recommend/>
        <weekend/>
    </div>
</template>

<script>
import homeHeader from './homes/header.vue';
import swiper from './homes/swiper.vue';
import icons from './homes/icons.vue';
import recommend from './homes/recommend.vue';
import weekend from './homes/weekend.vue'
export default {
    components: {
        homeHeader,
        swiper,
        icons,
        recommend,
        weekend
    }
}
</script>

<style>

</style>

