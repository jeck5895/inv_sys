export default {
    CLEAR_UNITS: state => {
        state.units = [];
    },
    CLEAR_UNIT: state => {
        state.unit = {};
    },
    CLEAR_UNITS_LIST: state => {
        state.units_list = [];
    },
    SET_UNIT: (state, payload) => {
        state.unit = payload;
    },
    SET_UNITS: (state, payload) => {
        state.units = payload;
    },
    SET_UNITS_LIST: (state, payload) => {
        state.units_list = payload;
    }
}