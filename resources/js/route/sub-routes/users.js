const UsersTable = () => import('../../components/admin/tables/users.vue');
const UsersForm = () => import('../../components/forms/user.vue');

export default [
    {
        path: '/',
        component: UsersTable
    },
    {
        path: 'register',
        component: UsersForm
    }
]