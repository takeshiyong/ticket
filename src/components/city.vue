<template>
  <div>
    <Header/>
    <Search/>
    <List :cities="cities" :hotCities="hotCities" :letter="letter"/>
    <alphabet :cities="cities" @change="handleChange"/>
  </div>
</template>

<script>
import axois from "axios";
import Header from "./city/header.vue";
import Search from "./city/search.vue";
import List from "./city/list.vue";
import alphabet from './city/alphabet.vue'
export default {
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    };
  },
  components: {
    Header,
    Search,
    List,
    alphabet
  },
  methods: {
    getAjax() {
      axois
        .get("api/city.json")
        .then(res => {
          console.log(res);
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.cities = data.cities;
            this.hotCities = data.hotCities;
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    handleChange(letter){
      this.letter = letter;
    }
  },
  mounted() {
    this.getAjax();
  }
};
</script>

<style>
</style>
