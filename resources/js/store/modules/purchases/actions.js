import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    FETCH_PURCHASES: ({ commit }, url) => {
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
                    commit("SET_PURCHASES", data);
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
                    dispatch("FETCH_PURCHASES");
                    setTimeout(() => {
                        resolve(response);
                    }, 1000);
                })
                .catch(error => {
                    toastr.error("Error", "Oops something went wrong");
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
                    dispatch("FETCH_PURCHASES");
                    setTimeout(() => {
                        resolve(response);
                    }, 1000);
                })
                .catch(({ response }) => {
                    toastr.error(
                        response.data.message,
                        "Server Response Error"
                    );
                    setTimeout(() => {
                        reject(error);
                    }, 1000);
                });
        });
    }
};
