import Cookies from 'js-cookie';
const token = Cookies.get('_a.token');

export default {
    STORE_PURCHASE: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/purchases', payload, {
                headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                toastr.success('Success', `${response.data.message}`);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}