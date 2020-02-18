export default {
    CLEAR_CUSTOMER: state => {
        state.customer = {};
    },
    CLEAR_SALES: state => {
        state.sales = [];
    },
    CLEAR_SALE: state => {
        state.sale = {};
    },
    SET_CUSTOMER: (state, payload) => {
        state.customer = payload;
    },
    SET_SALE: (state, payload) => {
        state.sale = payload;
    },
    SET_SALES: (state, payload) => {
        state.sales = payload;
    },
    SET_FILTER_FROM: (state, payload) => {
        state.filters.date_from = payload;
    },
    SET_FILTER_TO: (state, payload) => {
        state.filters.date_to = payload;
    },
    SET_FILTER_KEYWORD: (state, payload) => {
        state.filters.keyword = payload;
    },
    SET_SUBMIT_STATE: (state, payload) => {
        state.is_submitting = payload;
    },
    SET_LOADING_STATE: (state, payload) => {
        state.is_loading = payload;
    }
};
