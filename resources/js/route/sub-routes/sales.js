const Index = () => import('../../pages/admin/sales/index.vue');
const List = () => import('../../pages/admin/sales/list.vue');
const Create = () => import('../../pages/admin/sales/create.vue')

export default {
    path: "sales",
    component: Index,
    children: [
        {
            path: "",
            name: "sales",
            component: List
        },
        {
            path: "create",
            name: "create-sales",
            component: Create
        },
        {
            path: "edit/:receipt",
            name: "edit-sales",
            component: Create
        }
    ]
}
