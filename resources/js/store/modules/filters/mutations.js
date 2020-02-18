export default {
    SET_KEYWORD: (state, payload) => {
        state.keyword = payload;
    },
    SET_DATE_FROM: (state, payload) => {
        state.date_from = payload;
    },
    SET_DATE_TO: (state, payload) => {
        state.date_to = payload;
    },
    SET_CURRENT_PAGE: (state, payload) => {
        state.current_page = payload;
    },
    SET_PAGE_SIZE: (state, payload) => {
        state.page_size = payload;
    },
    SET_ORDER_BY: (state, payload) => {
        state.order_by = payload;
    },
    SET_SORT_BY: (state, payload) => {
        state.sort_by = payload;
    }
};
