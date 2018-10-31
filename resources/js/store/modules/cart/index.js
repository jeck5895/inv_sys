export default {
    namespaced: true,
    state: {
        cart_item: {},
        cart_items: []
    },
    getters: {
        GET_CART_ITEMS: state => {
            return state.cart_items;
        },
        GET_CART_ITEM: state => {
            return state.cart_item;
        }
    },
    mutations: {
        CLEAR_ITEM: state => {
            state.cart_item = {};
        },
        CLEAR_ITEMS: state => {
            state.cart_items = [];
        },
        SET_CART_ITEMS: (state, payload) => {
            state.cart_items.push(payload);
        },
        SET_CART_ITEM: (state, payload) => {
            state.cart_item = payload;
        },
        REMOVE_CART_ITEM: (state, payload) => {
            state.cart_items.splice(payload, 1);
        },
        UPDATE_CART: (state, payload) => {
            state.cart_items[payload.index] = payload.item;
        }
    }
}