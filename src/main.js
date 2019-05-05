import Vue from 'vue';
import App from './App';
import router from './router'
import fastClick from 'fastclick';
import 'styles/border.css';
import 'styles/reset.css';
import 'styles/iconfont.css';


fastClick.attach(document.body);

const vm = new Vue({
    el: "#app",
    components:{
      App
    },
    // render: (c) => c(App),
   template: '<App/>'
    ,
    router
})