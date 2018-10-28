import Cookies from 'js-cookie';
const token = Cookies.get('_a.token');

export default {
    FETCH_ITEMS_LIST: ({ commit }) => {
        const token = Cookies.get('_a.token');
        return new Promise((resolve, reject) => {
            axios.get('/api/stocks/lists', {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_ITEMS_LIST');
                commit('SET_ITEMS_LIST', response.data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    },
    FETCH_ITEMS: ({ commit }, payload) => {
        
        return new Promise((resolve, reject) => {
            axios.get('/api/stocks', {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_ITEMS');
                commit('SET_ITEMS', response.data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    },
    STORE_ITEM: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/stocks', payload, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                toastr.success('Success', `${response.data.message}`);
                commit('CLEAR_ITEM');
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    UPDATE_ITEM: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.patch(`/api/stocks/${payload.id}`, payload, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                toastr.success('Success', `${response.data.message}`);
                commit('CLEAR_ITEM');
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    DELETE_ITEM: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.delete(`/api/stocks/${payload}`, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                toastr.success('Success', `${response.data.message}`);
                // commit('CLEAR_ITEM');
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}