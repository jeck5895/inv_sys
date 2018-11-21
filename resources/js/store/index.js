import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from './modules/auth/index';
import SALES_MODULE from './modules/sales/index';
import ITEMS_MODULE from './modules/items/index';
import UNITS_MODULE from './modules/units/index';
import SITES_MODULE from './modules/sites/index';
import CART_MODULE from './modules/cart/index';
import USERS_MODULE from './modules/users/index';
import FILTER_MODULE from './modules/filters/index';
import FORM_MODULE from './modules/forms/index';
import CUSTOMERS_MODULE from './modules/customers/index'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        AuthModule,
        SALES_MODULE,
        ITEMS_MODULE,
        UNITS_MODULE,
        SITES_MODULE,
        CART_MODULE,
        USERS_MODULE,
        FILTER_MODULE,
        FORM_MODULE,
        CUSTOMERS_MODULE
    }
});

