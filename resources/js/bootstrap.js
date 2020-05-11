window.Vue = require("vue");
import VueRouter from "vue-router";
import VeeValidate from "vee-validate";
import moment from "moment";
import toastr from "toastr";
import Cookies from "js-cookie";
import VuejsDialog from "vuejs-dialog";
import "vuejs-dialog/dist/vuejs-dialog.min.css";
import Select2 from "v-select2-component";
import { requestHandler, errorHandler } from "./config/handlers";
import { store } from "./store";

window._ = require("lodash");
window.Popper = require("popper.js").default;
window.VeeValidate = VeeValidate;
window.moment = moment;
window.toastr = toastr;
window.Cookies = Cookies;

window.store = store;

Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(VuejsDialog);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

Vue.component("passport-clients", require("./components/passport/Clients.vue"));

Vue.component(
    "passport-authorized-clients",
    require("./components/passport/AuthorizedClients.vue")
);

Vue.component(
    "passport-personal-access-tokens",
    require("./components/passport/PersonalAccessTokens.vue")
);

Vue.component("Select2", Select2);

/**
 * Global Filters
 */
Vue.filter("humanReadable", function (date) {
    return moment(date).format("MMMM D, YYYY");
});

try {
    window.$ = window.jQuery = require("jquery");
    window.Popper = require("popper.js").default; //for bootstrap 4 dropdown
    window.hammerjs = require("hammerjs");

    require("bootstrap");
} catch (e) { }

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
// const token = Cookies.get("_a.token");
window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.baseURL =
    window.location.protocol + "//" + window.location.host;

window.axios.interceptors.request.use(
    config => requestHandler(config),
    error => errorHandler(error)
);

// if (token) {
//     window.axios.defaults.headers.common["Authorization"] = token;
// }

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
} else {
    console.error(
        "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
    );
}

/**
 * GLOBAL COMPONENTS
 */
// Vue.component("modal", require("./components/modal.vue").default);
// Vue.component("card", require("./components/card.vue").default);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
