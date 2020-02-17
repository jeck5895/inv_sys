import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

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
        SET_BRANDS: (state, payload) => {
            state.brands = payload;
        }
    },
    actions: {
        fetchBrands: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .get(payload, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        commit("CLEAR_BRANDS");
                        commit("SET_BRANDS", response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        store: ({ commit, dispatch }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .post("api/brands", payload, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        dispatch("fetchBrands", "api/brands");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
