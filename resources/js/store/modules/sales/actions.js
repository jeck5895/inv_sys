import Cookies from 'js-cookie';
const token = Cookies.get('_a.token');

export default {
    FETCH_SALES: ({commit}, payload) => {
        let url = payload ? payload : '/api/sales';
        return new Promise((resolve, reject) => {
            axios.get(url, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_SALES');
                commit('SET_SALES', response.data.model);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    },
    FETCH_SALE: ({context}, payload) => {

    },
    FETCH_CUSTOMER: ({context}, payload) => {

    },
    STORE_SALE: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/sales', payload, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    },
    UPDATE_SALE: ({context}, payload) => {

    }
}