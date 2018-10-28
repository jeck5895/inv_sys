export default {
    CLEAR_CUSTOMER: state => {
        state.customer = {};
    },
    SET_CUSTOMER: (state, payload) => {
        state.customer = payload;
    },
    SET_SALE: (state, payload) => {
        state.sale = payload;
    },
    SET_SALES: (state, payload) => {
        state.sales = payload;
    }
}