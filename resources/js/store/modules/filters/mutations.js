export default {
    SET_KEYWORD: (state, payload) => {
        state.keyword = payload;
    },
    SET_DATE_FROM: (state, payload) => {
        state.date_from = payload;
    },
    SET_DATE_TO: (state, payload) => {
        state.date_to = payload;
    }
}