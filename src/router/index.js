import vue from 'vue';
import Router from 'vue-router';
// import App from '../App.vue';
import Home from '../components/home.vue'

vue.use(Router);    
const router = new Router({
    routes:[
        {path: "/", component: Home}
    ]
})
export default router;