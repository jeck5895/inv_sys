import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from './modules/auth/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        AuthModule
    }
});

