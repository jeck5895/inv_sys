export default {
    CLEAR_USER: state => {
        state.user = {};
    },
    CLEAR_USERS: state => {
        state.users = [];
    },
    SET_USER: (state, payload) => {
        state.user = payload;
    },
    SET_USERS: (state, payload) => {
        state.users = payload;
    },
    SET_LOADING: (state, payload) => {
        state.is_loading = payload;
    }
}