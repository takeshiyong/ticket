import vue from 'vue';
import Router from 'vue-router';
// import App from '../App.vue';
import Home from '../components/home.vue'
import city from '../components/city'

vue.use(Router);    
const router = new Router({
    routes:[
        {path: "/", component: Home},
        {path: "/city",component: city}
    ]
})
export default router;