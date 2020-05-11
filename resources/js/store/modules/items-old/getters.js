export default {
    GET_ITEM: state => {
        return state.item;
    },
    GET_ITEMS: state => {
        return state.items;
    },
    GET_ITEMS_LIST: state => {
        return state.items_list;
    },
    GET_SUBMIT_STATE: state => {
        return state.is_submitting;
    }
};
