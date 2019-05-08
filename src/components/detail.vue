<template>
    <div>
        <banner/>
        <heade/>
        <div class="co"></div>
    </div>
</template>

<script>
import banner from './detail/banner.vue';
import heade from './detail/heade.vue';
export default {
    components:{
        banner,
        heade
    }
}
</script>

<style>
    .co{
        height: 1000px;
    }
</style>
