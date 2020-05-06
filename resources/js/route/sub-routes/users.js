// const Index = () => import('../../components/admin/tables/users.vue');
const Index = () => import('../../pages/users/lists.vue');
const UserIndex = () => import("../../pages/users/index.vue");

export default {
    path: "users",
    component: UserIndex,
    children: [
        {
            path: "",
            component: Index,
        },
        // {
        //     path: "register",
        //     component: Registration
        // }
    ]
}
