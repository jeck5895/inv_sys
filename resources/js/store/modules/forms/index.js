export default {
    namespaced: true,
    state: {
        form_type: localStorage.getItem('f_type') == null ? '' : localStorage.getItem('f_type')
    },
    getters: {
        GET_FORM_TYPE: state => {
            return state.form_type;
        }
    },
    mutations: {
        SET_FORM_TYPE: (state, payload) => {
            localStorage.setItem('f_type', payload);
            state.form_type = payload;
            console.log(payload)
        }
    }
}