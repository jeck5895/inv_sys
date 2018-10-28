export default {
    FETCH_UNITS_LIST: ({ commit }) => {
        const token = Cookies.get('_a.token');
        return new Promise((resolve, reject) => {
            axios.get('/api/units/lists', {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_UNITS_LIST');
                commit('SET_UNITS_LIST', response.data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    },
    FETCH_UNITS: ({ commit }, payload) => {
        const token = Cookies.get('_a.token');
        return new Promise((resolve, reject) => {
            axios.get('/api/units', {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_UNITS');
                commit('SET_UNITS', response.data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    }
}