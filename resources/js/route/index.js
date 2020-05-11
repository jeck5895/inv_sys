import VueRouter from "vue-router";
import AdminSubRoutes from "./sub-routes/adminSubRoutes";

const AdminIndex = () => import("../pages/admin/index.vue");
const LoginPage = () =>
    import(/*webpackChunkname: "login" */ "../pages/login.vue");

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

const router = new VueRouter({
    routes,
    mode: "history",
    linkExactActiveClass: "active",
    linkActiveClass: "active"
});


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.forAuthUsers)) {
        if (!store.getters["AuthModule/LOGGED_IN"]) {
            next({
                path: "/login"
            });
        } else {
            next();
        }
    } else if (
        !to.matched.some(record => record.meta.forAuthUsers) &&
        to.fullPath == "/login" &&
        store.getters["AuthModule/LOGGED_IN"]
    ) {
        next({
            path: "/administrator/stocks"
        });
    } else {
        next();
    }
});

export default router
