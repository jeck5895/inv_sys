import moment from "moment";

export default {
    customer: {},
    sales_item: {
        items: [
            {
                imei: "",
                model_id: "",
                color_id: "",
                selling_price: "",
                brand_id: "",
                discount: "",
                freebies: []
            }
        ],
        receipt_no: "",
        checkout_date: moment().format("Y-MM-DD"),
        payment_mode: "",
        payment_terms: "",
        total_amount: 0
    },
    sales: [],
    is_submitting: false,
    is_loading: false,
    filters: {
        keyword: "",
        date_from: "",
        date_to: ""
    }
};
