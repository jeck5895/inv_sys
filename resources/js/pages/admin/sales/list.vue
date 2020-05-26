<template>
    <div class="row">
        <div class="col-lg-12">
            <card>
                <template v-slot:card-header>
                    <h3 class="card-title mb-0">Sales</h3>
                </template>
                <template v-slot:card-body>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="clearfix">
                                <div class="float-lg-left py-2">
                                    <date-filter
                                        :date-from="date_from"
                                        :date-to="date_to"
                                        @on-change="onChange"
                                        @on-submit="handleFilter"
                                    ></date-filter>
                                </div>
                                <div class="float-lg-right d-lg-flex py-2">
                                    <button
                                        @click="handleModal"
                                        class="btn btn-sm btn-success mr-2"
                                    >
                                        Generate Sales Report
                                    </button>

                                    <search-form
                                        :keyword="keyword"
                                        @on-change="onChange"
                                        @on-submit="handleSearch"
                                    ></search-form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 mb-3 table-responsive">
                            <sales-table
                                :items="sales"
                                :is-loading="is_loading"
                                @on-edit="handleEdit"
                                @on-delete="handleDelete"
                            ></sales-table>
                        </div>
                        <div class="col-lg-12">
                            <Pagination
                                :data="sales"
                                @to-page="toPage"
                                @first-page="firstPage"
                                @prev-page="prevPage"
                                @next-page="nextPage"
                                @last-page="lastPage"
                            />
                        </div>
                    </div>
                </template>
            </card>
            <modal>
                <template v-slot:modal-title>
                    <h5 class="modal-title text-white">
                        Generate Report
                    </h5>
                </template>
                <template v-slot:modal-body>
                    <div v-if="response_errors !== null" class="form-group">
                        <validation-error-component
                            :error-object="response_errors"
                        ></validation-error-component>
                    </div>
                    <report-form
                        :is-loading="is_submitting"
                        :branches="branches"
                        @on-submit="onReportSubmit"
                    ></report-form>
                </template>
            </modal>
        </div>
    </div>
</template>

<script>
const Card = () =>
    import(/* webpackChunkName: 'card' */ "../../../components/card");

import SalesTable from "../../../components/admin/tables/sales-table";
import SearchForm from "../../../components/filters/search";
import DateFilter from "../../../components/filters/date-filter";
import Pagination from "../../../components/Pagination";
import Modal from "../../../components/modal";
import ReportForm from "../../../components/forms/report";
import ValidationErrorComponent from "../../../components/validation-errors";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    components: {
        Card,
        SalesTable,
        SearchForm,
        DateFilter,
        Pagination,
        ReportForm,
        Modal,
        ValidationErrorComponent
    },
    computed: {
        ...mapGetters({
            sales: "SALES/GET_SALES",
            is_loading: "SALES/GET_LOADING_STATE",
            keyword: "FILTER_MODULE/GET_KEYWORD",
            branches: "BRANCHES/branches"
        }),
        date_from: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_DATE_FROM"];
            },
            set(newVal) {
                this.$store.commit("FILTER_MODULE/SET_DATE_FROM", newVal);
            }
        },
        date_to: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_DATE_TO"];
            },
            set(newVal) {
                this.$store.commit("FILTER_MODULE/SET_DATE_TO", newVal);
            }
        },
        page_size: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_PAGE_SIZE"];
            },
            set(val) {
                this.$store.commit("FILTER_MODULE/SET_PAGE_SIZE", val);
            }
        },
        current_page: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_CURRENT_PAGE"];
            },
            set(val) {
                this.$store.commit("FILTER_MODULE/SET_PAGE_SIZE", val);
            }
        },
        order_by: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_ORDER_BY"];
            },
            set(val) {
                this.$store.commit("FILTER_MODULE/SET_ORDER_BY", val);
            }
        },
        sort_by: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_SORT_BY"];
            },
            set(val) {
                this.$store.commit("FILTER_MODULE/SET_SORT_BY", val);
            }
        }
    },
    data: function() {
        return {
            data: [],
            is_submitting: false,
            response_errors: null
        };
    },
    methods: {
        ...mapActions("SALES", {
            fetchSales: "FETCH_SALES",
            find: "FIND",
            delete: "DELETE"
        }),
        ...mapActions("BRANCHES", {
            fetchBranches: "fetchOptionList"
        }),
        ...mapMutations({
            setKeyword: "FILTER_MODULE/SET_KEYWORD",
            setDateFrom: "FILTER_MODULE/SET_DATE_FROM",
            setDateTo: "FILTER_MODULE/SET_DATE_TO"
        }),
        handleEdit(sales) {
            if (sales) {
                this.$router
                    .push({
                        name: "edit-sales",
                        params: { receipt: sales.receipt_no }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        handleDelete(sales) {
            let options = { html: true, loader: true };
            this.$dialog
                .confirm(`<h5>Delete ${sales.receipt_no} ?</h5>`, options)
                .then(dialog => {
                    this.delete(sales.id).then(() => {
                        dialog.close();
                        this.fetchSales(
                            `/api/sales?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`
                        );
                    });
                })
                .catch(() => {});
        },
        onChange(e) {
            const name = e.target.name;
            const value = e.target.value;

            switch (name) {
                case "keyword":
                    this.setKeyword(value);
                    break;
                case "date_from":
                    this.setDateFrom(value);
                    break;
                case "date_to":
                    this.setDateTo(value);
                    break;
                default:
                    break;
            }

            // this.$store.commit("FILTER_MODULE/SET_KEYWORD", value);
        },
        handleSearch(keyword) {
            const url = `/api/sales?q=${keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        handleFilter(evt) {
            const { date_from, date_to } = evt;
            const url = `/api/sales?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${date_from}&date_to=${date_to}`;

            this.fetchSales(url);
        },
        onReportSubmit(evt) {
            const token = Cookies.get("_a.token");
            const { type, branch } = evt;
            const baseURL =
                window.location.protocol + "//" + window.location.host;

            const anchor_tag = document.createElement("a");
            anchor_tag.style = "display:none";

            switch (type) {
                case "daily":
                    const { date_from, date_to } = evt;
                    this.is_submitting = true;
                    axios
                        .get(
                            `/api/sales/report/daily?branch=${branch}&date_from=${date_from}&date_to=${date_to}`,
                            {
                                headers: {
                                    Accept: "application/json",
                                    Authorization: `Bearer ${token}`
                                }
                            }
                        )
                        .then(({ data }) => {
                            this.is_submitting = false;
                            this.response_errors = null;
                            // ref: sofi-locatorslist
                            anchor_tag.href = data.file;
                            anchor_tag.target = "_blank";
                            anchor_tag.download = data.filename;
                            anchor_tag.click();
                        })
                        .catch(({ response }) => {
                            this.is_submitting = false;
                            if (response.status === 422) {
                                this.response_errors = response.data.errors;
                                // toastr.error(response.data.message);
                            }
                        });

                    // window.open(
                    //     `${baseURL}/api/sales/report/daily?date_from=${date_from}&date_to=${date_to}`,
                    //     "Daily Sales Report",
                    //     "width=700,heigth=300"
                    // );
                    break;
                case "monthly":
                    const { month, year } = evt;

                    this.is_submitting = true;
                    axios
                        .get(
                            `/api/sales/report/monthly?branch=${branch}&month=${month}&year=${year}`,
                            {
                                headers: {
                                    Accept: "application/json",
                                    Authorization: `Bearer ${token}`
                                }
                            }
                        )
                        .then(({ data }) => {
                            this.is_submitting = false;
                            this.response_errors = null;
                            // ref: sofi-locatorslist
                            anchor_tag.href = data.file;
                            anchor_tag.target = "_blank";
                            anchor_tag.download = data.filename;
                            anchor_tag.click();
                        })
                        .catch(({ response }) => {
                            this.is_submitting = false;

                            if (response.status === 422) {
                                this.response_errors = response.data.errors;
                                // toastr.error(response.data.message);
                            }
                        });

                    break;
                default:
                    break;
            }
        },
        toPage(page) {
            const url = `/api/sales?q=${this.keyword}&page=${page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        firstPage(first_page_url) {
            const url = `${first_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        prevPage(prev_page_url) {
            const url = `${prev_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        nextPage(next_page_url) {
            const url = `${next_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        lastPage(last_page_url) {
            const url = `${last_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        handleModal() {
            $("#generic-modal").modal("show");
        },
        setBreadcrumbs() {
            const breadcrumbs = [
                {
                    text: "Administrator",
                    link: "/administrator"
                },
                {
                    text: "Sales",
                    link: "/administrator/sales"
                }
            ];
            this.$store.commit("setBreadcrumbs", breadcrumbs);
        }
    },
    mounted() {
        this.setBreadcrumbs();
    },
    async created() {
        await this.fetchSales(
            `/api/sales?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`
        );
        await this.fetchBranches();
    }
};
</script>

<style></style>
