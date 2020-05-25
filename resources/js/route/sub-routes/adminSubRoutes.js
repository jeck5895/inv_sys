import InventoryRoutes from "../sub-routes/inventory";
import UserRoutes from "../sub-routes/users";
import SalesRoutes from "../sub-routes/sales";
import AuditRoutes from "../sub-routes/audits";

const Dashboard = () => import("../../pages/admin/dashboard.vue");
// const Issuance = () => import("../../pages/admin/issueance.vue");
const Reports = () => import("../../pages/admin/reports.vue");
const Customers = () => import("../../pages/admin/customers.vue");
const Inventory = () => import("../../pages/admin/purchases.vue");
const Supplier = () => import("../../pages/admin/suppliers.vue");
const Brands = () => import("../../pages/admin/brands.vue");
const Categories = () => import("../../pages/admin/categories.vue");
const Colors = () => import("../../pages/admin/colors.vue");
const Freebies = () => import("../../pages/admin/freebies.vue");
const Models = () => import("../../pages/admin/models.vue");



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
    },
    {
        path: "brands",
        component: Brands
    },
    {
        path: "categories",
        component: Categories
    },
    {
        path: "colors",
        component: Colors
    },
    {
        path: "freebies",
        component: Freebies
    },
    {
        path: "models",
        component: Models
    },
    UserRoutes,
    SalesRoutes,
    AuditRoutes
];
