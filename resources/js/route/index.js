import VueRouter from 'vue-router';
import AdminSubRoutes from './sub-routes/adminSubRoutes';

const AdminIndex = () => import('../pages/admin/index.vue');

let routes = [
    {
        path: '/',
        redirect: '/login',
        meta: {
            forAuthUsers: false
        }
    },
    {
        path: '/login',
        component: require('../components/auth/login.vue'),
    },
    {
        path: '/administrator',
        component: AdminIndex,
        children: AdminSubRoutes,
        meta: {
            forAuthUsers: true
        }
    },
    {
        path: "*",
        component: require("../pages/404.vue")
    }
];  

export default new VueRouter({
    routes,
    mode: 'history',
    linkExactActiveClass: 'active',
    linkActiveClass: 'active'
});