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
                                :object="customers"
                                module="CUSTOMERS_MODULE/FETCH_CUSTOMERS"
                                :query="
                                    `keyword=${keyword}&date_from=${date_from}&date_to=${date_to}`
                                "
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
import Pagination from "../../components/pagination";
import { store } from "../../store/index.js";

export default {
    beforeRouteEnter(to, from, next) {
        // next(vm => {
        //    vm.$store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS');
        // })
        store.dispatch("CUSTOMERS_MODULE/FETCH_CUSTOMERS").then(() => {
            next();
        });
    },
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
        date_from() {
            return this.$store.getters["FILTER_MODULE/GET_DATE_FROM"];
        },
        date_to() {
            return this.$store.getters["FILTER_MODULE/GET_DATE_TO"];
        }
    },
    methods: {
        handleSearch() {
            let url = `/api/customers?keyword=${this.keyword}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.$store.dispatch("CUSTOMERS_MODULE/FETCH_CUSTOMERS", url);
        }
    }
};
</script>

<style></style>
