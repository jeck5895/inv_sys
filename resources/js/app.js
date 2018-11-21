
require('./bootstrap');

import router from './route/index';
import { store } from './store/index';

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.forAuthUsers)) {
        if (!store.getters['AuthModule/LOGGED_IN']) {
            next({
                path: '/login'
            })
        }
        else {
            next();
        }
    }
    else if (!to.matched.some(record => record.meta.forAuthUsers) && to.fullPath == '/login' && store.getters['AuthModule/LOGGED_IN']) {
        next({
            path: '/administrator/stocks'
        })
    }
    else {
        next();
    }
});

const app = new Vue({
    el: '#app',
    router,
    store,
    methods: {
        setFormType(type) {
            localStorage.setItem('f_type', type);
        },
        convertError(error) {
            let obj = error.response;
            let keys = Object.keys(obj.data.errors);
            let response = [];

            response = [];

            if (keys.length > 0) {
                keys.forEach(e => {
                    obj.data.errors[e].forEach(d => {
                        response.push(d);
                    })
                });

                return response;
            }
            return;
        }
    },
});
