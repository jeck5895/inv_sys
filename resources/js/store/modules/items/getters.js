export default {
    GET_ITEM: state => {
        return state.item;
    },
    GET_ITEMS: state => {
        return state.items;
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
    },
    GET_SUBMIT_STATE: state => {
        return state.is_submitting;
    }
};
