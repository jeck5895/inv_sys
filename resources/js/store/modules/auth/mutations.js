export default {
    SET_LOGGEDIN: (state, payload) => {
        state.auth.loggedIn = payload;
    },
    SET_USER: (state, payload) => {
        state.auth.user = payload;
    }
}