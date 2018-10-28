import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from './modules/auth/index';
import SALES_MODULE from './modules/sales/index';
import ITEMS_MODULE from './modules/items/index';
import UNITS_MODULE from './modules/units/index';
import SITES_MODULE from './modules/sites/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        AuthModule,
        SALES_MODULE,
        ITEMS_MODULE,
        UNITS_MODULE,
        SITES_MODULE,
    }
});

