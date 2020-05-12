import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    FIND: ({ commit }, payload) => {
        commit("SET_IS_LOADING", true);
        return new Promise((resolve, reject) => {
            axios
                .get(`api/stocks/${payload}`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(({ data }) => {
                    commit("SET_ITEM", data);
                    resolve(data);
                    setTimeout(() => {
                        commit("SET_IS_LOADING", false);
                    }, 1000);
                })
                .catch(({ response }) => {
                    setTimeout(() => {
                        commit("SET_IS_LOADING", false);
                    }, 1000);
                    reject(response);
                });
        });
    },
    FIND_BY: ({ commit }, payload) => {
        commit("SET_IS_LOADING", true);
        return new Promise((resolve, reject) => {
            axios
                .get(`api/stocks/find-by/${payload.field}/${payload.value}`)
                .then(({ data }) => {
                    commit("SET_ITEM", data);
                    resolve(data);
                    setTimeout(() => {
                        commit("SET_IS_LOADING", false);
                    }, 1000);
                })
                .catch((error) => {
                    setTimeout(() => {
                        commit("SET_IS_LOADING", false);
                    }, 1000);
                    reject(error.response);
                });
        });
    },
    FETCH_ITEMS: ({ commit }, url) => {
        // let url = payload ? payload : "/api/stocks";
        commit("SET_IS_LOADING", true);
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(({ data }) => {
                    commit("SET_ITEMS", data);
                    resolve(data);
                    setTimeout(() => {
                        commit("SET_IS_LOADING", false);
                    }, 1000);
                })
                .catch(({ response }) => {
                    setTimeout(() => {
                        commit("SET_IS_LOADING", false);
                    }, 1000);
                    reject(response);
                });
        });
    },
    STORE: ({ dispatch }, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/stocks", payload, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    toastr.success("Success", `${response.data.message}`);
                    dispatch("FETCH_ITEMS");
                    setTimeout(() => {
                        resolve(response);
                    }, 1000);
                })
                .catch(error => {

                    toastr.error(
                        "An error occured",
                    );
                    setTimeout(() => {
                        reject(error);
                    }, 1000);
                });
        });
    },
    STORE_BULK: ({ dispatch }, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/stocks/bulk", payload, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    toastr.success("Success", `${response.data.message}`);
                    dispatch("FETCH_ITEMS");
                    setTimeout(() => {
                        resolve(response);
                    }, 1000);
                })
                .catch(({ response }) => {
                    toastr.error(
                        response.data.message,
                        "An error occured"
                    );
                    setTimeout(() => {
                        reject(error);
                    }, 1000);
                });
        });
    },
    UPDATE: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .patch(`/api/stocks/${payload.id}`, payload)
                .then(response => {
                    setTimeout(() => {
                        toastr.success("Success", `${response.data.message}`);
                        resolve(response);
                    }, 1000);
                })
                .catch(error => {
                    toastr.error(
                        "An error occured"
                    );
                    setTimeout(() => {
                        reject(error);
                    }, 1000);
                });
        });
    },
    DELETE: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .delete(`/api/stocks/${payload}`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    setTimeout(() => {
                        toastr.success("Success", `${response.data.message}`);
                        resolve(response);
                    }, 1000);
                })
                .catch(error => {
                    console.log(error.response);
                    toastr.error(
                        "An error occured",
                    );
                    setTimeout(() => {
                        reject(error);
                    }, 1000);
                });
        });
    }
};
