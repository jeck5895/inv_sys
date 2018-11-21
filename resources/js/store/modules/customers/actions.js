import Cookies from 'js-cookie';
const token = Cookies.get('_a.token');

export default {
    FETCH_CUSTOMER: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.get(`api/customers/${payload}`, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_CUSTOMER');
                commit('SET_CUSTOMER', response.data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    },
    FETCH_CUSTOMERS: ({commit}, payload) => {
        
        let url = payload ? payload : '/api/customers';
        
        commit('SET_LOADING', true);

        return new Promise((resolve, reject) => {
            axios.get(url, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_CUSTOMERS');
                commit('SET_CUSTOMERS', response.data);
                setTimeout(() => {
                    commit('SET_LOADING', false);
                    resolve(response)
                }, 1000);
            })
            .catch(error => {
                reject(error);
                setTimeout(() => {
                    commit('SET_LOADING', false);
                }, 1000);
            });
        });
    },
    STORE_CUSTOMER: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('api/customers', payload, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                toastr.success('Success', `${response.data.message}`);
                commit('CLEAR_CUSTOMER');
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    UPDATE_CUSTOMER: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.patch('api/customers/' + payload.id, payload, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                toastr.success('Success', `${response.data.message}`);
                commit('CLEAR_CUSTOMER');
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    DELETE_CUSTOMER: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.delete('api/customers/' + payload.id,{
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                toastr.success('Success', response.data.message);
                resolve(response);
            })
            .catch(error => {
                if (error.response.status == 403) {
                    toastr.error('Error', error.response.data.message)
                }
                reject(error);
            });
        });
    },
    SEARCH_CUSTOMER: ({ commit }, payload) => {
        
        let q = payload.customer_type ? 
        `customer_id=${payload.customer_id}&customer_type=${payload.customer_type}`
        :`customer_id=${payload.customer_id}` ;
        
        return new Promise((resolve, reject) => {
            axios.get(`api/customers/search?${q}`, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                // commit('CLEAR_CUSTOMER');
                // commit('SET_CUSTOMER', response.data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        })
    }
}