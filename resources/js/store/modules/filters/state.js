import moment from "moment";

export default {
    keyword: "",
    current_page: 1,
    page_size: 15,
    order_by: "desc",
    sort_by: "created_at",
    date_from: "",
    date_to: "",
    loading: false
    // date_from: moment().format("YYYY-MM-DD"),
    // date_to: moment().format("YYYY-MM-DD")
};
