import { store } from "../store";

const setBreadcrumbs = breadcrumbs => {
    if (!Array.isArray(breadcrumbs)) {
        return new Error("breadcrumbs should be of type Array<Object>")
        console.error('parameter should be of type Array');
    }

    store.commit("setBreadcrumbs", breadcrumbs);
}

export { setBreadcrumbs };
