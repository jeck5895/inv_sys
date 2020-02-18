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
                            <div class="d-flex justify-content-between">
                                <date-filter
                                    :date-from="date_from"
                                    :date-to="date_to"
                                    @on-submit="handleFilter"
                                ></date-filter>
                                <search-form
                                    :keyword="keyword"
                                    @on-change="onChange"
                                    @on-submit="handleSearch"
                                ></search-form>
                            </div>
                        </div>
                        <div class="col-lg-12 mb-3">
                            <sales-table
                                :items="sales"
                                :is-loading="is_loading"
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
        </div>
    </div>
</template>

<script>
const Card = () =>
    import(/* webpackChunkName: 'card' */ "../../components/card");

import SalesTable from "../../components/admin/tables/sales-table";
import SearchForm from "../../components/filters/search";
import DateFilter from "../../components/filters/date-filter";
import Pagination from "../../components/Pagination";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    components: {
        Card,
        SalesTable,
        SearchForm,
        DateFilter,
        Pagination
    },
    computed: {
        ...mapGetters({
            sales: "SALES_MODULE/GET_SALES",
            is_loading: "SALES_MODULE/GET_LOADING_STATE",
            keyword: "FILTER_MODULE/GET_KEYWORD"
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
            data: []
        };
    },
    methods: {
        ...mapActions({
            fetchSales: "SALES_MODULE/FETCH_SALES"
        }),
        onChange(value) {
            this.$store.commit("FILTER_MODULE/SET_KEYWORD", value);
        },
        handleSearch(keyword) {
            const url = `/api/sales?q=${keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        handleFilter(evt) {
            const { date_from, date_to } = evt;
            let url = `/api/sales?date_from=${date_from}&date_to=${date_to}`;
            console.log(url);
            //this.fetchSales(url);
        },
        toPage(page) {
            const url = `/api/sales?q=${this.keyword}&page=${page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        firstPage(first_page_url) {
            const url = `${first_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        prevPage(prev_page_url) {
            const url = `${prev_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        nextPage(next_page_url) {
            const url = `${next_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
        },
        lastPage(last_page_url) {
            const url = `${last_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.fetchSales(url);
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
    created() {
        this.fetchSales(
            `/api/sales?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}&date_from=${this.date_from}&date_to=${this.date_to}`
        );
    }
};
</script>

<style></style>
