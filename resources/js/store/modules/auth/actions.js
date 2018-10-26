export default {
    LOGIN: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('/oauth/token', payload)
            .then(response => {
                Cookies.set('_a.token', response.data.access_token, {expires: response.expires_in});
                Cookies.set('_r.token', response.data.refresh_token, {expires: response.expires_in});
                Cookies.set('_a.loggedIn', true, {expires: 31535998});
                commit('SET_LOGGEDIN', true);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
        });
    },
    FETCH_USER: ({commit}) => {
        const token = Cookies.get('_a.token');
        return new Promise((resolve, reject) => {
            axios.get('/api/user', {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('SET_USER', response.data);
                Cookies.set('_a.user', response.data, {expires: 31535998});
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    LOGOUT: ({commit}) => {
        commit('SET_LOGGEDIN', false);
        commit('SET_USER', null);
        Cookies.remove('_a.token');
        Cookies.remove('_r.token');
        Cookies.remove('_a.loggedIn');
        Cookies.remove('_a.user');
    }
}