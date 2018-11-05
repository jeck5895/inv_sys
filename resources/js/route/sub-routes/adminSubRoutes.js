const Dashboard = () => import('../../pages/admin/dashboard.vue');
const Stocks = () => import('../../pages/admin/stocks.vue');
const Issuance = () => import('../../pages/admin/issueance.vue');
const Reports = () => import('../../pages/admin/reports.vue');

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
    },
    {
        path: 'reports',
        component: Reports
    }
];