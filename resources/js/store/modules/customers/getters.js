export default {
    GET_CUSTOMER: state => {
        return state.customer;
    },
    GET_CUSTOMERS: state => {
        return state.customers;
    },
    GET_LOADING_STATE: state => {
        return state.is_loading;
    }
}