import VueRouter from 'vue-router';
import AdminSubRoutes from './sub-routes/adminSubRoutes';
import UserSubRoutes from './sub-routes/users';

const AdminIndex = () => import('../pages/admin/index.vue');
const UserIndex = () => import('../pages/users/index.vue');

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
        path: '/users',
        component: UserIndex,
        children: UserSubRoutes,
        meta: {
            forAuthUsers: true
        }
    }
];  

export default new VueRouter({
    routes,
    mode: 'history',
    linkExactActiveClass: 'active',
    linkActiveClass: 'active'
});