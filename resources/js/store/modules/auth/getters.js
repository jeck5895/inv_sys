export default {
    LOGGED_IN: state => {
        return state.auth.loggedIn;
    },
    GET_USER: state => {
        return state.auth.user;
    }
}