import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    namespaced: true,
    state: {
        categories: [],
        category: {}
    },
    getters: {
        GET_CATEGORIES: state => {
            return state.categories;
        },
        GET_CATEGORY: state => {
            return state.category;
        }
    },
    mutations: {
        CLEAR_CATEGORIES: state => {
            state.categories = [];
        },
        SET_CATEGORIES: (state, payload) => {
            state.categories = payload;
        }
    },
    actions: {
        fetchCategories: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .get(payload, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        commit("CLEAR_CATEGORIES");
                        commit("SET_CATEGORIES", response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
