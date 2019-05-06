<template>
    <div>
        <homeHeader/>
        <swiper/>
        <icons/>
    </div>
</template>

<script>
import homeHeader from './homes/header.vue';
import swiper from './homes/swiper.vue';
import icons from './homes/icons.vue';
export default {
    components: {
        homeHeader,
        swiper,
        icons
    }
}
</script>

<style>

</style>

