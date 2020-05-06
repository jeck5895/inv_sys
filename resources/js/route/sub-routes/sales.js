const Index = () => import('../../pages/admin/sales/index.vue');
const List = () => import('../../pages/admin/sales/list.vue');
const Create = () => import('../../pages/admin/sales/create.vue')

export default {
    path: "sales",
    component: Index,
    children: [
        {
            path: "",
            component: List
        },
        {
            path: "create",
            component: Create
        }
    ]
}
