export default {
    LOGIN: ({ commit, dispatch }, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/oauth/token", payload)
                .then(response => {
                    Cookies.set("_a.token", response.data.access_token, {
                        expires: response.expires_in
                    });
                    Cookies.set("_r.token", response.data.refresh_token, {
                        expires: response.expires_in
                    });
                    Cookies.set("_a.loggedIn", true, { expires: 31535998 });
                    dispatch("FETCH_USER");
                    commit("SET_LOGGEDIN", true);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    REFRESH_TOKEN: ({ commit }) => {
        const refresh_token = Cookies.get("_r.token");
        const client_id = process.env.MIX_PASSPORT_CLIENT_ID;
        const client_secret = process.env.MIX_PASSPORT_CLIENT_SECRET;
        const payload = {
            'grant_type': 'refresh_token',
            'refresh_token': refresh_token,
            'client_id': client_id,
            'client_secret': client_secret,
            'scope': '',
        };
        return new Promise((resolve, reject) => {
            axios
                .post("/oauth/token", payload)
                .then(response => {
                    console.log(response);

                    commit("SET_LOGGEDIN", true);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    FETCH_USER: ({ commit }) => {
        // const token = Cookies.get("_a.token");
        return new Promise((resolve, reject) => {
            axios
                .get("/api/user"

                )
                .then(response => {
                    commit("SET_USER", response.data);
                    Cookies.set("_a.user", response.data, {
                        expires: 31535998
                    });
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    LOGOUT: ({ commit }) => {
        commit("SET_LOGGEDIN", false);
        commit("CLEAR_USER");
        Cookies.remove("_a.token");
        Cookies.remove("_r.token");
        Cookies.remove("_a.loggedIn");
        Cookies.remove("_a.user");
    }
};
