import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "./modules/auth";
import SALES from "./modules/sales";
import ITEMS_MODULE from "./modules/items-old";
import UNITS from "./modules/units/index";
// import SITES_MODULE from "./modules/sites/index";
// import CART_MODULE from "./modules/cart/index";
import USERS from "./modules/users";
import FILTER_MODULE from "./modules/filters";
import FORM_MODULE from "./modules/forms";
import CUSTOMERS_MODULE from "./modules/customers";
import ITEMS from "./modules/items";
import BRANDS from "./modules/brands";
import CATEGORIES from "./modules/categories";
import COLORS from "./modules/color";
import SUPPLIERS from "./modules/suppliers";
import FREEBIES from "./modules/freebies";
import BRANCHES from "./modules/branches";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        AuthModule,
        SALES,
        ITEMS_MODULE,
        UNITS,
        USERS,
        FILTER_MODULE,
        FORM_MODULE,
        CUSTOMERS_MODULE,
        ITEMS,
        BRANDS,
        CATEGORIES,
        COLORS,
        SUPPLIERS,
        FREEBIES,
        BRANCHES
    },
    state: {
        breadcrumbs: []
    },
    mutations: {
        clearBreadcrumbs: state => {
            state.breadcrumbs = [];
        },
        setBreadcrumbs: (state, payload) => {
            state.breadcrumbs = payload;
        }
    }
});
