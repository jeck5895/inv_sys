<template>
    <div class="row">
        <div class="col-lg-12">
            <card>
                <template v-slot:card-header>
                    <h3 class="card-title mb-0 float-left">MANAGE COLORS</h3>
                </template>
                <template v-slot:card-body>
                    <div class="row">
                        <div class="col-lg-12 mb-2 ">
                            <div class="clearfix">
                                <div class="float-right d-flex py-2">
                                    <search-form
                                        :keyword="keyword"
                                        @on-change="onChange"
                                        @on-submit="handleSearch"
                                    ></search-form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 mb-3 table-responsive">
                            <suppliers-table
                                :items="suppliers"
                                :is-loading="is_loading"
                            ></suppliers-table>
                        </div>
                        <div class="col-lg-12">
                            <Pagination
                                :data="suppliers"
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
import Card from "../../components/card";
import SuppliersTable from "../../components/admin/tables/suppliers-table";
import Pagination from "../../components/Pagination";
import SearchForm from "../../components/filters/search";

import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: {
        Card,
        SuppliersTable,
        Pagination,
        SearchForm
    },
    computed: {
        ...mapGetters({
            suppliers: "SUPPLIERS/GET_SUPPLIERS",
            is_loading: "SUPPLIERS/GET_LOADING_STATE",
            is_submitting: "SUPPLIERS/GET_SUBMIT_STATE",
            keyword: "FILTER_MODULE/GET_KEYWORD"
        }),
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
    methods: {
        ...mapActions({
            fetchSuppliers: "SUPPLIERS/fetchSuppliers"
        }),
        ...mapMutations({
            setKeyword: "FILTER_MODULE/SET_KEYWORD"
        }),
        onChange(e) {
            this.setKeyword(e.target.value);
        },
        handleSearch(keyword) {
            const url = `/api/suppliers?q=${keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchSuppliers(url);
        },
        toPage(page) {
            const url = `/api/suppliers?q=${this.keyword}&page=${page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchSuppliers(url);
        },
        firstPage(first_page_url) {
            const url = `${first_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchSuppliers(url);
        },
        prevPage(prev_page_url) {
            const url = `${prev_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchSuppliers(url);
        },
        nextPage(next_page_url) {
            const url = `${next_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchSuppliers(url);
        },
        lastPage(last_page_url) {
            const url = `${last_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchSuppliers(url);
        },
        setBreadcrumbs() {
            const breadcrumbs = [
                {
                    text: "Administrator",
                    link: "/administrator"
                },
                {
                    text: "Colors",
                    link: "/administrator/colors"
                }
            ];
            this.$store.commit("setBreadcrumbs", breadcrumbs);
        }
    },
    async created() {
        this.setBreadcrumbs();

        await this.fetchSuppliers(
            `/api/suppliers?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
        );
    }
};
</script>

<style></style>
