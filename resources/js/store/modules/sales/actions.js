import Cookies from 'js-cookie';
const token = Cookies.get('_a.token');

export default {
    FETCH_SALES: ({context}, payload) => {

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
                toastr.success('Success', 'Sales has been saved');
                commit('CLEAR_CUSTOMER');
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