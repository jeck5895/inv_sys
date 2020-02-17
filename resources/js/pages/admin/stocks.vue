<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class="fa fa-clone"></i> My Stocks
                    </div>
                    <div class="card-body table-responsive">
                        <!-- Buttons -->
                        <NavButtons />
                        <!-- End Buttons -->
                        <hr />
                        <!-- Table -->
                        <ItemsTable :items="stocks.model" />
                        <!-- End Table -->

                        <!-- Item Form Modal -->
                        <ItemForm />
                        <!-- End Item Form Modal -->

                        <!-- Item quantity Form modal -->
                        <ItemQuantityForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavButtons from "../../components/admin/buttons/item-buttons.vue";
import ItemsTable from "../../components/admin/tables/items.vue";
import ItemForm from "../../components/form-modal/item.vue";
import ItemQuantityForm from "../../components/form-modal/item-quantity.vue";
import { store } from "../../store/index.js";

export default {
    beforeRouteEnter(to, from, next) {
        store.dispatch("ITEMS_MODULE/FETCH_ITEMS").then(() => {
            store.dispatch("UNITS_MODULE/FETCH_UNITS_LIST");
            store.dispatch("SITES_MODULE/FETCH_SITES_LIST");
            next();
        }); //items data table
        store.dispatch("ITEMS_MODULE/FETCH_ITEMS_LIST");
    },
    computed: {
        stocks() {
            return this.$store.getters["ITEMS_MODULE/GET_ITEMS"];
        }
    },
    components: {
        NavButtons,
        ItemsTable,
        ItemForm,
        ItemQuantityForm
    }
};
</script>

<style></style>
