export default {
    CLEAR_ITEMS: state => {
        state.items = [];
    },
    CLEAR_ITEM: state => {
        state.item = {};
    },
    CLEAR_ITEMS_LIST: state => {
        state.items_list = [];
    },
    SET_ITEM: (state, payload) => {
        state.item = payload;
    },
    SET_ITEMS: (state, payload) => {
        state.items = payload;
    },
    SET_ITEMS_LIST: (state, payload) => {
        state.items_list = payload;
    }
}