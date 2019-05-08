import vue from 'vue';
import Router from 'vue-router';
// import App from '../App.vue';
import Home from '../components/home.vue'
import city from '../components/city'
import detail from '../components/detail'
vue.use(Router);    
const router = new Router({
    routes:[
        {path: "/", component: Home},
        {path: "/city",component: city},
        {path: "/detail/:id",component: detail}
    ]
})
export default router;