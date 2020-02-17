import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    namespaced: true,
    state: {
        suppliers: [],
        supplier: {}
    },
    getters: {
        GET_SUPPLIERS: state => {
            return state.suppliers;
        },
        GET_SUPPLIER: state => {
            return state.supplier;
        }
    },
    mutations: {
        CLEAR_SUPPLIERS: state => {
            state.suppliers = [];
        },
        SET_SUPPLIERS: (state, payload) => {
            state.suppliers = payload;
        }
    },
    actions: {
        fetchSuppliers: ({ commit }, payload) => {
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
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
