import vue from 'vue';
import Vuex from 'Vuex';
import mutations from './mutations';
import state from './state';

vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations
})