export default {
    GET_PURCHASE: state => {
        return state.purchase;
    },
    GET_PURCHASES: state => {
        return state.purchases;
    },
    GET_KEYWORD: state => {
        return state.keyword;
    },
    GET_CURRENT_PAGE: state => {
        return state.current_page;
    },
    GET_PAGE_SIZE: state => {
        return state.page_size;
    },
    GET_ORDER_BY: state => {
        return state.order_by;
    },
    GET_SORT_BY: state => {
        return state.sort_by;
    },
    IS_LOADING: state => {
        return state.is_loading;
    }
};
