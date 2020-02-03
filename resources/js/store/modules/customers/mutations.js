export default {
    CLEAR_CUSTOMER: state => {
        state.customer = {};
    },
    CLEAR_CUSTOMERS: state => {
        state.customers = [];
    },
    SET_CUSTOMER: (state, payload) => {
        state.customer = payload;
    },
    SET_CUSTOMERS: (state, payload) => {
        state.customers = payload;
    },
    SET_LOADING: (state, payload) => {
        state.is_loading = payload;
    }
}