import Cookies from "js-cookie";

export default {
    namespaced: true,
    state: {
        brands: [],
        brand: {}
    },
    getters: {
        GET_BRANDS: state => {
            return state.brands;
        },
        GET_BRAND: state => {
            return state.brand;
        }
    },
    mutations: {
        CLEAR_BRANDS: state => {
            state.brands = [];
        },
        CLEAR_BRAND: state => {
            state.brand = {};
        },
        SET_BRANDS: (state, payload) => {
            state.brands = payload;
        },
        SET_BRAND: (state, payload) => {
            state.brand = payload;
        }
    },
    actions: {
        fetchBrands: ({ commit }, url) => {
            commit("FILTER_MODULE/SET_LOADING", true, { root: true });

            return new Promise((resolve, reject) => {
                axios
                    .get(url)
                    .then(response => {
                        commit("CLEAR_BRANDS");
                        commit("SET_BRANDS", response.data);
                        commit("FILTER_MODULE/SET_LOADING", false, {
                            root: true
                        });
                        resolve(response);
                    })
                    .catch(error => {
                        commit("FILTER_MODULE/SET_LOADING", false, {
                            root: true
                        });
                        reject(error);
                    });
            });
        },
        store: ({ commit, dispatch }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .post("api/brands", payload)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        update: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .patch(`api/brands/${payload.id}`, payload)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        delete: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`api/brands/${payload}`)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
