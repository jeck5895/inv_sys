<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-users"></i> Customers
                </div>

                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <button
                                        @click="
                                            $store.commit(
                                                'FORM_MODULE/SET_FORM_TYPE',
                                                'NEW_CUSTOMER'
                                            )
                                        "
                                        data-toggle="modal"
                                        data-target="#customermodal"
                                        class="btn btn-success"
                                    >
                                        <i class="fa fa-user-plus"></i>
                                        ADD CUSTOMER
                                    </button>
                                </div>
                                <div class="col-md-6">
                                    <form
                                        @submit.prevent="handleSearch"
                                        class="form-inline float-right"
                                    >
                                        <input
                                            type="text"
                                            v-model="keyword"
                                            class="form-control mb-2 mr-sm-2"
                                            id="inlineFormInputName2"
                                            placeholder="Search students"
                                        />
                                        <button
                                            type="submit"
                                            class="btn btn-success mb-2"
                                        >
                                            <i class="fa fa-search"></i>SEARCH
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <CustomersTable :items="customers" />
                        </div>
                        <div class="col-md-12 justify-content-right">
                            <Pagination
                                :data="customers"
                                @to-page="toPage"
                                @first-page="firstPage"
                                @prev-page="prevPage"
                                @next-page="nextPage"
                                @last-page="lastPage"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <CustomerFormModal />
        </div>
    </div>
</template>

<script>
import CustomerFormModal from "../../components/form-modal/customer";
import CustomersTable from "../../components/customers/tables/index";
import Pagination from "../../components/Pagination";
import { store } from "../../store/index.js";
import { mapActions } from "vuex";

export default {
    // beforeRouteEnter(to, from, next) {
    //     // next(vm => {
    //     //    vm.$store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS');
    //     // })
    //     store.dispatch("CUSTOMERS_MODULE/FETCH_CUSTOMERS").then(() => {
    //         next();
    //     });
    // },
    components: {
        CustomerFormModal,
        CustomersTable,
        Pagination
    },
    computed: {
        customers() {
            return this.$store.getters["CUSTOMERS_MODULE/GET_CUSTOMERS"];
        },
        keyword: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_KEYWORD"];
            },
            set(newVal, oldVal) {
                this.$store.commit("FILTER_MODULE/SET_KEYWORD", newVal);
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
        },
        date_from() {
            return this.$store.getters["FILTER_MODULE/GET_DATE_FROM"];
        },
        date_to() {
            return this.$store.getters["FILTER_MODULE/GET_DATE_TO"];
        }
    },
    methods: {
        ...mapActions({
            fetchCustomers: "CUSTOMERS_MODULE/FETCH_CUSTOMERS"
        }),
        handleSearch() {
            this.fetchCustomers(
                `/api/customers?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
            );
        },
        toPage(page) {
            const url = `/api/customers?q=${this.keyword}&page=${page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchCustomers(url);
        },
        firstPage(first_page_url) {
            const url = `${first_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchCustomers(url);
        },
        prevPage(prev_page_url) {
            const url = `${prev_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchCustomers(url);
        },
        nextPage(next_page_url) {
            const url = `${next_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchCustomers(url);
        },
        lastPage(last_page_url) {
            const url = `${last_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchCustomers(url);
        }
    },
    async created() {
        await this.fetchCustomers(
            `/api/customers?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
        );
    }
};
</script>

<style></style>
