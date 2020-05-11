export default {
    CLEAR_ITEM: state => {
        state.item = {};
    },
    SET_ITEM: (state, payload) => {
        state.item = payload;
    },
    SET_ITEMS: (state, payload) => {
        state.items = payload;
    },
    SET_KEYWORD: (state, payload) => {
        state.keyword = payload;
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
    },
    SET_IS_LOADING: (state, payload) => {
        state.is_loading = payload;
    },
    SET_SUBMIT_STATE: (state, payload) => {
        state.is_submitting = payload;
    }
};
