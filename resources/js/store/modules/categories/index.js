
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
        },
        SET_CATEGORY: (state, payload) => {
            state.category = payload;
        },
        CLEAR_CATEGORY: state => {
            state.category = {};
        }
    },
    actions: {
        fetchCategories: ({ commit, dispatch }, payload) => {
            commit("FILTER_MODULE/SET_LOADING", true, { root: true });
            return new Promise((resolve, reject) => {
                axios
                    .get(payload)
                    .then(response => {
                        commit("CLEAR_CATEGORIES");
                        commit("SET_CATEGORIES", response.data);
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
                    .post("api/categories", payload)
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
                    .patch(`api/categories/${payload.id}`, payload)
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
                    .delete(`api/categories/${payload}`)
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
