import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    FETCH_SALES: ({ commit }, url) => {
        commit("SET_LOADING_STATE", true);

        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then(response => {
                    setTimeout(() => {
                        commit("CLEAR_SALES");
                        commit("SET_SALES", response.data);
                        commit("SET_LOADING_STATE", false);
                        resolve(response);
                    }, 500);
                })
                .catch(error => {
                    setTimeout(() => {
                        commit("SET_LOADING_STATE", false);
                        reject(error);
                    }, 500);
                });
        });
    },
    FIND: ({ commit }, id) => {
        return new Promise((resolve, reject) => {
            axios.get(`api/sales/${id}`)
                .then(response => {
                    commit("SET_SALES_ITEM", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    FIND_BY: ({ commit }, { field, value }) => {
        return new Promise((resolve, reject) => {
            axios.get(`api/sales/find-by/${field}/${value}`)
                .then(response => {
                    commit("SET_SALES_ITEM", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    STORE: ({ commit }, payload) => {
        commit("SET_SUBMIT_STATE", true);

        return new Promise((resolve, reject) => {
            axios
                .post("/api/sales", payload)
                .then(response => {
                    setTimeout(() => {
                        commit("SET_SUBMIT_STATE", false);
                        resolve(response);
                        toastr.success("Success", `${response.data.message}`);
                    }, 500);
                })
                .catch(error => {
                    setTimeout(() => {
                        toastr.error("An error occured");
                        commit("SET_SUBMIT_STATE", false);
                        reject(error);
                    }, 500);
                });
        });
    },
    UPDATE: ({ commit }, payload) => {
        commit("SET_SUBMIT_STATE", true);

        return new Promise((resolve, reject) => {
            axios
                .patch(`/api/sales/${payload.id}`, payload)
                .then(response => {
                    setTimeout(() => {
                        commit("SET_SUBMIT_STATE", false);
                        resolve(response);
                        toastr.success("Success", `${response.data.message}`);
                    }, 500);
                })
                .catch(error => {
                    setTimeout(() => {
                        toastr.error("An error occured");
                        commit("SET_SUBMIT_STATE", false);
                        reject(error);
                    }, 500);
                });
        });
    }
};
