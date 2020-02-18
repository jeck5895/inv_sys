<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-clone"></i> My Inventory
                </div>

                <div class="card-body table-responsive">
                    <div class="row justify-content-between">
                        <div class="col-lg-4">
                            <!-- <router-link
                                to="/administrator/inventory/create"
                                class="btn btn-primary waves-effect text-white"
                            >
                                <i class="fa fa-cubes"></i>
                                Add Item
                            </router-link> -->
                            <button
                                @click="handleNavigate"
                                class="btn btn-success waves-effect text-white"
                            >
                                <i class="fa fa-cubes"></i>
                                Add Item
                            </button>
                        </div>
                        <div class="col-lg-6">
                            <form
                                @submit.prevent="handleSearch"
                                class="form-inline float-right"
                            >
                                <div class="form-group">
                                    <input
                                        type="text"
                                        v-model="keyword"
                                        class="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        placeholder="Search item"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-success mb-2"
                                >
                                    <i class="fa fa-search"></i>SEARCH
                                </button>
                            </form>
                        </div>
                        <div class="col-lg-12 mb-3">
                            <InventoryTable
                                :items="purchases"
                                :is-loading="isLoading"
                                @on-edit="handleEdit"
                                @on-checkout="handleCheckout"
                                @on-delete="handleDelete"
                            />
                        </div>
                        <div class="col-md-12 justify-content-right">
                            <!-- <Pagination
                                :object="purchases"
                                module="PURCHASES_MODULE/FETCH_PURCHASES"
                            /> -->
                            <Pagination
                                :data="purchases"
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
        </div>
        <modal v-if="item.model && item.model.name">
            <template v-slot:modal-title>
                Checkout {{ item.model.name }}
            </template>
            <template v-slot:modal-body>
                <checkout-form
                    :item="item"
                    :is-loading="isSubmitting"
                    :models="models"
                    :colors="colors"
                    @on-submit="handleSubmitCheckout"
                ></checkout-form>
            </template>
        </modal>
    </div>
</template>

<script>
import InventoryTable from "../../../components/admin/tables/purchases";
import Pagination from "../../../components/Pagination";
import Modal from "../../../components/modal";
import CheckoutForm from "../../../components/forms/checkout-form";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
    components: {
        InventoryTable,
        Pagination,
        Modal,
        CheckoutForm
    },
    computed: {
        ...mapGetters({
            purchases: "PURCHASES_MODULE/GET_PURCHASES",
            isLoading: "PURCHASES_MODULE/IS_LOADING",
            isSubmitting: "SALES_MODULE/GET_SUBMIT_STATE",
            models: "UNITS/GET_UNITS",
            colors: "COLORS/GET_COLORS",
            item: "ITEMS_MODULE/GET_ITEM"
        }),
        keyword: {
            get() {
                return this.$store.getters["PURCHASES_MODULE/GET_KEYWORD"];
            },
            set(val) {
                this.$store.commit("PURCHASES_MODULE/SET_KEYWORD", val);
            }
        },
        page_size: {
            get() {
                return this.$store.getters["PURCHASES_MODULE/GET_PAGE_SIZE"];
            },
            set(val) {
                this.$store.commit("PURCHASES_MODULE/SET_PAGE_SIZE", val);
            }
        },
        current_page: {
            get() {
                return this.$store.getters["PURCHASES_MODULE/GET_CURRENT_PAGE"];
            },
            set(val) {
                this.$store.commit("PURCHASES_MODULE/SET_PAGE_SIZE", val);
            }
        },
        order_by: {
            get() {
                return this.$store.getters["PURCHASES_MODULE/GET_ORDER_BY"];
            },
            set(val) {
                this.$store.commit("PURCHASES_MODULE/SET_ORDER_BY", val);
            }
        },
        sort_by: {
            get() {
                return this.$store.getters["PURCHASES_MODULE/GET_SORT_BY"];
            },
            set(val) {
                this.$store.commit("PURCHASES_MODULE/SET_SORT_BY", val);
            }
        }
    },
    data: () => ({
        data: [],
        module: "PURCHASES_MODULE",
        api_url: ""
    }),
    methods: {
        ...mapActions({
            fetchColors: "COLORS/fetchColors",
            fetchModels: "UNITS/FETCH_UNITS",
            checkout: "SALES_MODULE/STORE"
        }),
        fetchStocks(url) {
            this.$store.dispatch("PURCHASES_MODULE/FETCH_PURCHASES", url);
        },
        handleEdit(item) {
            console.log(item);
        },
        handleCheckout(item) {
            item = { ...item, payment_mode: "" };
            this.$store.commit("ITEMS_MODULE/SET_ITEM", item);
            // this.selected_item = { ...item };
            // this.$set(this.selected_item, "imei", item.imei);
            setTimeout(() => {
                $("#generic-modal").modal("show");
            }, 300);
        },
        handleDelete(item) {
            console.log(item);
        },
        handleSubmitCheckout(evt) {
            console.log(evt);
            const {
                item_id,
                model,
                imei,
                color,
                price,
                amount,
                payment_mode,
                credit_term,
                freebies,
                form,
                errors
            } = evt;

            let payload = {
                item_id,
                // model,
                // imei,
                // color,
                // price,
                amount,
                payment_mode,
                credit_term
            };
            if (credit_term != undefined) {
                payload = { ...payload, credit_term };
            }
            if (freebies != undefined && freebies.length > 0) {
                payload = { ...payload, freebies };
            }
            this.checkout(payload).then(() => {
                this.reset(form, errors);
                $("#generic-modal").modal("hide");
            });
        },
        handleNavigate() {
            this.$store.commit("ITEMS_MODULE/CLEAR_ITEM");
            this.$router.push("/administrator/inventory/create");
        },
        handleSearch() {
            this.fetchStocks(
                `/api/stocks?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
            );
        },
        toPage(page) {
            const url = `/api/stocks?q=${this.keyword}&page=${page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchStocks(url);
        },
        firstPage(first_page_url) {
            const url = `${first_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchStocks(url);
        },
        prevPage(prev_page_url) {
            const url = `${prev_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchStocks(url);
        },
        nextPage(next_page_url) {
            const url = `${next_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchStocks(url);
        },
        lastPage(last_page_url) {
            const url = `${last_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchStocks(url);
        },
        reset(form, errors) {
            this.$set(this.item, "model_id", "");
            this.$set(this.item, "imei", "");
            this.$set(this.item, "color_id", "");
            this.$set(this.item, "selling_price", "");
            this.$set(this.item, "payment_mode", "");
            this.$set(this.item, "freebies", "");
            this.$set(this.item, "credit_term", null);

            form.reset();
            errors.clear();
        },
        setBreadcrumbs() {
            const breadcrumbs = [
                {
                    text: "Administrator",
                    link: "/administrator"
                },
                {
                    text: "Inventory",
                    link: "/administrator/inventory"
                }
            ];
            this.$store.commit("setBreadcrumbs", breadcrumbs);
        }
    },
    mounted() {
        this.setBreadcrumbs();
    },
    async created() {
        await this.fetchColors("api/colors");
        await this.fetchModels();
        // await this.fetchStocks();
        this.fetchStocks(
            `/api/stocks?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
        );
    }
};
</script>

<style></style>
