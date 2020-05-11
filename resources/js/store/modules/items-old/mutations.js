export default {
    CLEAR_ITEMS: state => {
        state.items = [];
    },
    CLEAR_ITEM: state => {
        state.item = {
            model_id: "",
            imei: "",
            color_id: "",
            brand_id: "",
            category_id: "",
            supplier_id: "",
            selling_price: null,
            amount: null,
            cost: null,
            remarks: ""
        };
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
    },
    SET_SUBMIT_STATE: (state, payload) => {
        state.is_submitting = payload;
    }
};
