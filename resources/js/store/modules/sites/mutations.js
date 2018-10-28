export default {
    CLEAR_SITES: state => {
        state.sites = [];
    },
    CLEAR_SITE: state => {
        state.site = {};
    },
    CLEAR_SITES_LIST: state => {
        state.sites_list = [];
    },
    SET_SITE: (state, payload) => {
        state.site = payload;
    },
    SET_SITES: (state, payload) => {
        state.sites = payload;
    },
    SET_SITES_LIST: (state, payload) => {
        state.sites_list = payload;
    }
}