import VueRouter from "vue-router";
import AdminSubRoutes from "./sub-routes/adminSubRoutes";
import UserSubRoutes from "./sub-routes/users";

const AdminIndex = () => import("../pages/admin/index.vue");
const UserIndex = () => import("../pages/users/index.vue");
const LoginPage = () =>
    import(/*webpackChunkname:Login */ "../pages/login.vue");

const routes = [
    {
        path: "/",
        redirect: "/login",
        meta: {
            forAuthUsers: false
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/administrator",
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
    mode: "history",
    linkExactActiveClass: "active",
    linkActiveClass: "active"
});
