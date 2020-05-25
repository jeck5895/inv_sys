const state = {
    logs: [],
    loading: false,
    pagination: {},
}

const getters = {
    logs: state => {
        return state.logs;
    },
    loading: state => {
        return state.loading;
    },
    pagination: state => {
        return state.pagination;
    }
}

const mutations = {
    SET_LOGS: (state, payload) => {
        state.logs = payload;
    },
    SET_LOADING: (state, payload) => {
        state.loading = payload;
    },
    SET_PAGINATION: (state, payload) => {
        state.pagination = payload;
    }
}

const actions = {
    fetch: ({ commit }, url) => {
        commit("SET_LOADING", true);

        axios.get(url)
            .then(response => {
                commit("SET_LOADING", false);
                commit("SET_LOGS", response.data.data);
                commit("SET_PAGINATION", response.data);
                Promise.resolve(response);
            })
            .catch(error => {
                commit("SET_LOADING", false);
                console.log(error.response);
                Promise.reject(error.response);
            })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
