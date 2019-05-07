<template>
    <div>
        <Header/>
        <Search/>
        <List/>
    </div>
</template>

<script>
import Header from './city/header.vue';
import Search from './city/search.vue';
import List from './city/list.vue';
export default {
    components: {
        Header,
        Search,
        List
    }
}
</script>

<style>

</style>
