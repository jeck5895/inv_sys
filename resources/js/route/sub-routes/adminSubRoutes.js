import InventoryRoutes from "../sub-routes/inventory";

const Dashboard = () => import("../../pages/admin/dashboard.vue");
const Stocks = () => import("../../pages/admin/stocks.vue");
// const Issuance = () => import("../../pages/admin/issueance.vue");
const Reports = () => import("../../pages/admin/reports.vue");
const Customers = () => import("../../pages/admin/customers.vue");
const Inventory = () => import("../../pages/admin/purchases.vue");
const Supplier = () => import("../../pages/admin/suppliers.vue");
const Sales = () => import("../../pages/admin/sales.vue");

export default [
    {
        path: "",
        redirect: "/administrator/dashboard"
    },
    {
        path: "dashboard",
        component: Dashboard
    },
    {
        path: "stocks",
        component: Stocks,
        redirect: "inventory"
    },
    {
        path: "sales",
        component: Sales
    },
    {
        path: "suppliers",
        component: Supplier
    },
    {
        path: "reports",
        component: Reports
    },
    {
        path: "customers",
        component: Customers
    },
    {
        path: "inventory",
        component: Inventory,
        children: InventoryRoutes
    }
];
