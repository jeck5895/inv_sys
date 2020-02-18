export default {
    GET_KEYWORD: state => {
        return state.keyword;
    },
    GET_DATE_FROM: state => {
        return state.date_from;
    },
    GET_DATE_TO: state => {
        return state.date_to;
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
    }
};
