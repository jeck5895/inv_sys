// const Index = () => import('../../components/admin/tables/users.vue');
const Index = () => import('../../pages/users/lists.vue');
const Registration = () => import('../../pages/users/register.vue');

export default [
    {
        path: '/',
        component: Index,
    },
    {
        path: 'register',
        component: Registration
    }
]