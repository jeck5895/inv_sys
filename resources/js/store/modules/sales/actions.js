import Cookies from "js-cookie";
const token = Cookies.get("_a.token");

export default {
    FETCH_SALES: ({ commit }, url) => {
        commit("SET_LOADING_STATE", true);

        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
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
    FETCH_SALE: ({ context }, payload) => {},
    STORE: ({ commit }, payload) => {
        commit("SET_SUBMIT_STATE", true);

        return new Promise((resolve, reject) => {
            axios
                .post("/api/sales", payload, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    setTimeout(() => {
                        commit("SET_SUBMIT_STATE", false);
                        resolve(response);
                        toastr.success("Success", `${response.data.message}`);
                    }, 500);
                })
                .catch(error => {
                    setTimeout(() => {
                        toastr.error("Error", "Oops something went wrong");
                        commit("SET_SUBMIT_STATE", false);
                        reject(error);
                    }, 500);
                });
        });
    },
    UPDATE_SALE: ({ context }, payload) => {}
};
