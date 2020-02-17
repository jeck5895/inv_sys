import CreateComponent from "../../pages/admin/inventory/create.vue";
import IndexComponent from "../../pages/admin/inventory/index.vue";

const routes = [
    {
        path: "",
        component: IndexComponent
    },
    {
        path: "create",
        component: CreateComponent
    }
];

export default routes;
