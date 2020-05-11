import CreateComponent from "../../pages/admin/inventory/create.vue";
import IndexComponent from "../../pages/admin/inventory/index.vue";

const routes = [
    {
        path: "",
        name: "inventory",
        component: IndexComponent
    },
    {
        path: "create",
        name: "create-inventory",
        component: CreateComponent
    }
];

export default routes;
