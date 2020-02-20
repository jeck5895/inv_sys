import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    namespaced: true,
    state: {
        suppliers: [],
        supplier: {},
        is_loading: false,
        is_submitting: false
    },
    getters: {
        GET_SUPPLIERS: state => {
            return state.suppliers;
        },
        GET_SUPPLIER: state => {
            return state.supplier;
        },
        GET_LOADING_STATE: state => {
            return state.is_loading;
        },
        GET_SUBMIT_STATE: state => {
            return state.is_submitting;
        }
    },
    mutations: {
        CLEAR_SUPPLIERS: state => {
            state.suppliers = [];
        },
        SET_SUPPLIERS: (state, payload) => {
            state.suppliers = payload;
        },
        SET_LOADING_STATE: (state, payload) => {
            state.is_loading = payload;
        },
        GET_SUBMIT_STATE: (state, payload) => {
            state.is_submitting = payload;
        }
    },
    actions: {
        fetchSuppliers: ({ commit }, payload) => {
            commit("SET_LOADING_STATE", true);

            return new Promise((resolve, reject) => {
                axios
                    .get(payload, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        commit("CLEAR_SUPPLIERS");
                        commit("SET_SUPPLIERS", response.data);
                        setTimeout(() => {
                            commit("SET_LOADING_STATE", false);
                            resolve(response);
                        }, 1000);
                    })
                    .catch(error => {
                        setTimeout(() => {
                            toastr.error(
                                "Server Response Error",
                                "Oops something went wrong."
                            );
                            commit("SET_LOADING_STATE", false);
                            reject(error);
                        }, 1000);
                    });
            });
        }
    }
};
