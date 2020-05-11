require("./bootstrap");

import router from "./route/index";

if (process.env.MIX_ENV_MODE === 'production') {
    Vue.config.devtools = false;
    Vue.config.debug = false;
    Vue.config.silent = true;
}

const app = new Vue({
    el: "#app",
    router,
    store,
    methods: {
        setFormType(type) {
            localStorage.setItem("f_type", type);
        },
        convertError(error) {
            let obj = error.response;
            let keys = Object.keys(obj.data.errors);
            let response = [];

            response = [];

            if (keys.length > 0) {
                keys.forEach(e => {
                    obj.data.errors[e].forEach(d => {
                        response.push(d);
                    });
                });

                return response;
            }
            return;
        }
    }
});
