import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations.js';

Vue.use(Vuex);

const state = {
    view: {
        showSidebar: true
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations
});
