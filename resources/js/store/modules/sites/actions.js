export default {
    FETCH_SITES_LIST: ({ commit }) => {
        const token = Cookies.get('_a.token');
        return new Promise((resolve, reject) => {
            axios.get('/api/sites/lists', {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_SITES_LIST');
                commit('SET_SITES_LIST', response.data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    },
    FETCH_SITES: ({ commit }, payload) => {
        const token = Cookies.get('_a.token');
        return new Promise((resolve, reject) => {
            axios.get('/api/sites', {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_SITES');
                commit('SET_SITES', response.data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    }
}