import IndexComponent from "../../pages/admin/audits/index.vue";
import GeneralAudits from "../../pages/admin/audits/general.vue";

const routes =
{
    path: "audit-logs",
    component: IndexComponent,
    children: [
        {
            path: "",
            name: "audit-logs",
            component: GeneralAudits
        }
    ]
}
    ;

export default routes;
