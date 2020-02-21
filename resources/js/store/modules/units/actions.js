import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    FETCH_UNITS_LIST: ({ commit }) => {
        const token = Cookies.get("_a.token");
        return new Promise((resolve, reject) => {
            axios
                .get("/api/units/lists", {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    commit("CLEAR_UNITS_LIST");
                    commit("SET_UNITS_LIST", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    fetchUnits: ({ commit }, url) => {
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
                    commit("CLEAR_UNITS");
                    commit("SET_UNITS", response.data);
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
                .post("api/models", payload, {
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
                .patch(`api/models/${payload.id}`, payload, {
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
                .delete(`api/models/${payload}`, {
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
};
