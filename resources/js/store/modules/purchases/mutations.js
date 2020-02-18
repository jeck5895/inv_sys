export default {
    SET_PURCHASE: (state, payload) => {
        state.purchase = payload;
    },
    SET_PURCHASES: (state, payload) => {
        state.purchases = payload;
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
    }
};
