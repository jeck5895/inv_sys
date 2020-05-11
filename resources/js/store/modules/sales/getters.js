export default {
    GET_CUSTOMER: state => {
        return state.customer;
    },
    GET_SALES_ITEM: state => {
        return state.sales_item;
    },
    GET_SALES: state => {
        return state.sales;
    },
    GET_FILTER_FROM: state => {
        return state.filters.date_from;
    },
    GET_FILTER_TO: state => {
        return state.filters.date_to;
    },
    GET_FILTER_KEYWORD: state => {
        return state.filters.keyword;
    },
    GET_SUBMIT_STATE: state => {
        return state.is_submitting;
    },
    GET_LOADING_STATE: state => {
        return state.is_loading;
    }
};
