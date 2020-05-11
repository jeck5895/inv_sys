import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    namespaced: true,
    state: {
        freebies: [],
        freebie: {}
    },
    getters: {
        GET_FREEBIES: state => {
            return state.freebies;
        },
        GET_FREEBIE: state => {
            return state.freebie;
        }
    },
    mutations: {
        CLEAR_FREEBIES: state => {
            state.freebies = [];
        },
        SET_FREEBIES: (state, payload) => {
            state.freebies = payload;
        },
        SET_FREEBIE: (state, payload) => {
            state.freebie = payload;
        },
        CLEAR_FREEBIE: state => {
            state.freebie = {};
        }
    },
    actions: {
        fetchFreebies: ({ commit, dispatch }, url) => {
            commit("FILTER_MODULE/SET_LOADING", true, { root: true });

            return new Promise((resolve, reject) => {
                axios
                    .get(url)
                    .then(response => {
                        commit("CLEAR_FREEBIES");
                        commit("SET_FREEBIES", response.data);
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
                    .post("api/freebies", payload)
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
                    .patch(`api/freebies/${payload.id}`, payload)
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
                    .delete(`api/freebies/${payload}`)
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
