import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    namespaced: true,
    state: {
        colors: [],
        color: {}
    },
    getters: {
        GET_COLORS: state => {
            return state.colors;
        },
        GET_COLOR: state => {
            return state.color;
        }
    },
    mutations: {
        CLEAR_COLORS: state => {
            state.colors = [];
        },
        SET_COLORS: (state, payload) => {
            state.colors = payload;
        },
        SET_COLOR: (state, payload) => {
            state.color = payload;
        },
        CLEAR_COLOR: state => {
            state.color = {};
        }
    },
    actions: {
        fetchColors: ({ commit, dispatch }, url) => {
            commit("FILTER_MODULE/SET_LOADING", true, { root: true });

            return new Promise((resolve, reject) => {
                axios
                    .get(url, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        commit("CLEAR_COLORS");
                        commit("SET_COLORS", response.data);
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
                    .post("api/colors", payload, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
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
                    .patch(`api/colors/${payload.id}`, payload, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
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
                    .delete(`api/colors/${payload}`, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
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
