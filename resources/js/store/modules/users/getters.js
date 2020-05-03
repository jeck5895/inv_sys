export default {
    GET_USER: state => {
        return state.user;
    },
    GET_USERS: state => {
        return state.users;
    },
    GET_LOADING_STATE: state => {
        return state.is_loading;
    },
    GET_PAGINATION: state => {
        return state.pagination;
    },
    GET_SUBMIT_STATE: state => {
        return state.is_saving;
    }
}
