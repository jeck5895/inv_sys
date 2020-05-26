const state = {
    is_loading: false,
    branch: {},
    branches: [],
    pagination: {},
    is_saving: false
};

const getters = {
    GET_BRANCH: state => {
        return state.branch;
    },
    GET_BRANCHES: state => {
        return state.branches;
    },
    GET_LOADING_STATE: state => {
        return state.is_loading;
    },
    GET_PAGINATION: state => {
        return state.pagination;
    },
    GET_SUBMIT_STATE: state => {
        return state.is_saving;
    }
};

const mutations = {
    CLEAR_BRANCH: state => {
        state.branch = {};
    },
    CLEAR_BRANCHES: state => {
        state.branches = [];
    },
    SET_BRANCH: (state, payload) => {
        state.branch = payload;
    },
    SET_BRANCHES: (state, payload) => {
        state.branches = payload;
    },
    SET_LOADING: (state, payload) => {
        state.is_loading = payload;
    },
    SET_PAGINATION: (state, payload) => {
        state.pagination = payload;
    },
    SET_SAVING: (state, payload) => {
        state.is_saving = payload;
    }
};

const actions = {
    fetchSingle: ({ commit }, id) => {
        return new Promise((resolve, reject) => {
            axios
                .get(`api/branches/${id}`)
                .then(response => {
                    commit("CLEAR_BRANCH");
                    commit("SET_BRANCH", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    fetchList: ({ commit }, payload) => {
        const url = payload ? payload : "/api/branches";

        commit("SET_LOADING", true);

        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then(response => {
                    commit("CLEAR_BRANCHES");
                    // commit('SET_PAGINATION', response.data);
                    commit("SET_BRANCHES", response.data);
                    setTimeout(() => {
                        commit("SET_LOADING", false);
                        resolve(response);
                    }, 1000);
                })
                .catch(error => {
                    reject(error);
                    setTimeout(() => {
                        commit("SET_LOADING", false);
                    }, 1000);
                });
        });
    },
    store: ({ commit }, payload) => {
        commit("SET_SAVING", true);
        return new Promise((resolve, reject) => {
            axios
                .post("api/branches", payload)
                .then(response => {
                    toastr.success("Success", `${response.data.message}`);
                    commit("SET_SAVING", false);
                    commit("CLEAR_BRANCH");
                    resolve(response);
                })
                .catch(error => {
                    commit("SET_SAVING", false);
                    reject(error);
                });
        });
    },
    update: ({ commit }, payload) => {
        commit("SET_SAVING", true);
        return new Promise((resolve, reject) => {
            axios
                .patch("api/branches/" + payload.id, payload)
                .then(response => {
                    toastr.success("Success", `${response.data.message}`);
                    commit("SET_SAVING", false);
                    commit("CLEAR_BRANCH");
                    resolve(response);
                })
                .catch(error => {
                    commit("SET_SAVING", false);
                    reject(error);
                });
        });
    },
    delete: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .delete("api/branches/" + payload.id)
                .then(response => {
                    toastr.success("Success", response.data.message);
                    resolve(response);
                })
                .catch(error => {
                    commit("SET_SAVING", false);
                    reject(error);
                });
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
