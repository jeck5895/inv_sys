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
                                class="btn btn-primary waves-effect text-white"
                            >
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
                        <div class="col-lg-12">
                            <InventoryTable
                                :items="purchases"
                                @on-edit="handleEdit"
                                @on-checkout="handleCheckout"
                                @on-delete="handleDelete"
                            />
                        </div>
                        <div class="col-md-12 justify-content-right">
                            <Pagination
                                :object="purchases"
                                module="PURCHASES_MODULE/FETCH_PURCHASES"
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
                    :models="models"
                    :colors="colors"
                    @on-submit="handleSubmit"
                ></checkout-form>
            </template>
        </modal>
    </div>
</template>

<script>
import InventoryTable from "../../../components/admin/tables/purchases";
import Pagination from "../../../components/pagination";
import Modal from "../../../components/modal";
import CheckoutForm from "../../../components/forms/checkout-form";
import { mapGetters, mapActions } from "vuex";

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
            models: "UNITS/GET_UNITS",
            colors: "COLORS/GET_COLORS",
            item: "ITEMS_MODULE/GET_ITEM"
        })
    },
    data: () => ({
        data: [],
        keyword: ""
    }),
    methods: {
        ...mapActions({
            fetchColors: "COLORS/fetchColors",
            fetchModels: "UNITS/FETCH_UNITS"
        }),
        fetchItems() {
            this.$store.dispatch("PURCHASES_MODULE/FETCH_PURCHASES");
        },
        handleEdit(item) {
            console.log(item);
        },
        handleCheckout(item) {
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
        handleSubmit(item) {
            console.log(item);
        },
        handleNavigate() {
            this.$store.commit("ITEMS_MODULE/CLEAR_ITEM");
            this.$router.push("/administrator/inventory/create");
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
        await this.fetchItems();
    }
};
</script>

<style></style>
