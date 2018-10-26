const Dashboard = () => import('../../components/admin/dashboard.vue');
const Stocks = () => import('../../pages/admin/stocks.vue');
const Issuance = () => import('../../components/admin/issueance.vue');

export default [
    {
        path: '',
        redirect: '/administrator/dashboard'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'stocks',
        component: Stocks
    },
    {
        path: 'issueance',
        component: Issuance
    }
];