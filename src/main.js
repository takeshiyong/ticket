import Vue from 'vue';
import App from './App';
import router from './router'
import fastClick from 'fastclick';
import './assets/styles/border.css';
import './assets/styles/reset.css';

fastClick.attach(document.body);

const vm = new Vue({
    el: "#app",
    components:{
      
    },
    render: (c) => c(App),
//    template: '<App/>'
//     ,
    router
})