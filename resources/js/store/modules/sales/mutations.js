export default {
    CLEAR_CUSTOMER: state => {
        state.customer = {};
    },
    CLEAR_SALES: state => {
        state.sales = [];
    },
    CLEAR_SALES_ITEM: state => {
        state.sales_item = {
            items: [
                {
                    imei: "",
                    model_id: "",
                    color_id: "",
                    selling_price: "",
                    brand_id: "",
                    freebies: []
                }
            ],
            receipt_no: "",
            checkout_date: moment().format("Y-MM-DD"),
            payment_mode: "",
            payment_terms: "",
            total_amount: 0
        };
    },
    SET_CUSTOMER: (state, payload) => {
        state.customer = payload;
    },
    SET_SALES_ITEM: (state, payload) => {
        const {
            id,
            receipt_no,
            checkout_date,
            payment_mode,
            payment_terms,
            amount,
            branch_id,
            sales_items
        } = payload;
        let items = [];
        let sales = {
            id,
            receipt_no,
            checkout_date: moment(checkout_date).format("Y-MM-DD"),
            payment_mode,
            branch: branch_id,
            total_amount: amount
        };

        if (payment_terms !== undefined || payment_terms !== "") {
            sales = { ...sales, payment_terms };
        }

        sales_items.map(sales_item => {
            const { item, sales_item_freebies } = sales_item;
            let a = {
                id: item.id,
                imei: item.imei,
                model_id: item.model_id,
                color_id: item.color_id,
                selling_price: item.selling_price,
                brand_id: item.brand_id,
                discount: sales_item.discount
            };
            let freebies = sales_item_freebies.map(item => item.freebie_id);
            a = { ...a, freebies };

            items.push(a);
        });

        sales = { ...sales, items };

        state.sales_item = sales;
    },
    SET_SALES: (state, payload) => {
        state.sales = payload;
    },
    SET_FILTER_FROM: (state, payload) => {
        state.filters.date_from = payload;
    },
    SET_FILTER_TO: (state, payload) => {
        state.filters.date_to = payload;
    },
    SET_FILTER_KEYWORD: (state, payload) => {
        state.filters.keyword = payload;
    },
    SET_SUBMIT_STATE: (state, payload) => {
        state.is_submitting = payload;
    },
    SET_LOADING_STATE: (state, payload) => {
        state.is_loading = payload;
    }
};
