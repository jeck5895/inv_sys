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
        }
    },
    actions: {
        fetchColors: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .get(payload, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        commit("CLEAR_COLORS");
                        commit("SET_COLORS", response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
