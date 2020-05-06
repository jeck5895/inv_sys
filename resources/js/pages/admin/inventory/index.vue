<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header"><i class="fa fa-clone"></i> My Inventory</div>

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
                class="btn btn-sm btn-success waves-effect text-white"
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
                    class="form-control form-control-sm mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Search item"
                  />
                </div>
                <button type="submit" class="btn btn-sm btn-success mb-2">
                  <i class="fa fa-search"></i>SEARCH
                </button>
              </form>
            </div>
            <div class="col-lg-12 mb-3 table-responsive">
              <InventoryTable
                :items="purchases"
                :is-loading="isLoading"
                @on-edit="handleEdit"
                @on-delete="handleDelete"
              />
            </div>
            <div class="col-md-12 justify-content-right">
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
    <modal>
      <template v-slot:modal-title>
        <h5 v-if="selected_item !== null" class="text-white">
          <span>Edit</span>
          {{ selected_item.model.name }}
        </h5>
      </template>
      <template v-slot:modal-body>
        <div v-if="errs !== null && responseStatus === 422" class="form-group">
          <Alert :response="errs" />
        </div>
        <item-form
          v-if="form_type === 'EDIT'"
          :item="item"
          :mode="'single'"
          :brands="brands"
          :categories="categories"
          :colors="colors"
          :suppliers="suppliers"
          :models="models"
          :is-loading="submit_state"
          @on-submit="handleSubmitUpdate"
        ></item-form>
      </template>
    </modal>
  </div>
</template>

<script>
import InventoryTable from "../../../components/admin/tables/purchases";
import Pagination from "../../../components/Pagination";
import Modal from "../../../components/modal";
import CheckoutForm from "../../../components/forms/checkout-form";
import ItemForm from "../../../components/forms/item-form";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Alert from "../../../components/alerts/error";
import parseError from "../../../utils/parser";

export default {
  components: {
    InventoryTable,
    Pagination,
    Modal,
    CheckoutForm,
    ItemForm,
    Alert
  },

  computed: {
    ...mapGetters({
      purchases: "PURCHASES/GET_PURCHASES",
      isLoading: "PURCHASES/IS_LOADING",
      isSubmitting: "SALES/GET_SUBMIT_STATE",
      models: "UNITS/GET_UNITS",
      colors: "COLORS/GET_COLORS",
      brands: "BRANDS/GET_BRANDS",
      categories: "CATEGORIES/GET_CATEGORIES",
      suppliers: "SUPPLIERS/GET_SUPPLIERS",
      submit_state: "ITEMS_MODULE/GET_SUBMIT_STATE"
    }),
    item() {
      let item = this.$store.getters["ITEMS_MODULE/GET_ITEM"];
      return {
        id: item.id,
        imei: item.imei,
        model_id: item.model_id,
        brand_id: item.brand_id,
        supplier_id: item.supplier_id,
        category_id: item.category_id,
        color_id: item.color_id,
        cost: item.cost,
        selling_price: item.selling_price,
        remarks: item.specs
      };
    },
    keyword: {
      get() {
        return this.$store.getters["PURCHASES/GET_KEYWORD"];
      },
      set(val) {
        this.$store.commit("PURCHASES/SET_KEYWORD", val);
      }
    },
    page_size: {
      get() {
        return this.$store.getters["PURCHASES/GET_PAGE_SIZE"];
      },
      set(val) {
        this.$store.commit("PURCHASES/SET_PAGE_SIZE", val);
      }
    },
    current_page: {
      get() {
        return this.$store.getters["PURCHASES/GET_CURRENT_PAGE"];
      },
      set(val) {
        this.$store.commit("PURCHASES/SET_PAGE_SIZE", val);
      }
    },
    order_by: {
      get() {
        return this.$store.getters["PURCHASES/GET_ORDER_BY"];
      },
      set(val) {
        this.$store.commit("PURCHASES/SET_ORDER_BY", val);
      }
    },
    sort_by: {
      get() {
        return this.$store.getters["PURCHASES/GET_SORT_BY"];
      },
      set(val) {
        this.$store.commit("PURCHASES/SET_SORT_BY", val);
      }
    }
  },
  data: () => ({
    data: [],
    module: "PURCHASES",
    form_type: null,
    selected_item: null,
    errs: null,
    responseStatus: null
  }),
  methods: {
    ...mapActions({
      fetchColors: "COLORS/fetchColors",
      fetchModels: "UNITS/fetchUnits",
      checkout: "SALES/STORE",
      fetchBrands: "BRANDS/fetchBrands",
      fetchCategories: "CATEGORIES/fetchCategories",
      fetchSuppliers: "SUPPLIERS/fetchSuppliers",
      updateItem: "PURCHASES/UPDATE",
      deleteItem: "PURCHASES/DELETE"
    }),
    ...mapMutations({
      setSubmitState: "ITEMS_MODULE/SET_SUBMIT_STATE",
      clearItem: "ITEMS_MODULE/CLEAR_ITEM"
    }),
    fetchStocks(url) {
      this.$store.dispatch("PURCHASES/FETCH_PURCHASES", url);
    },
    handleEdit(item) {
      this.form_type = "EDIT";
      this.selected_item = item;
      this.$store.commit("ITEMS_MODULE/SET_ITEM", item);
      setTimeout(() => {
        $("#generic-modal").modal("show");
      }, 300);
    },
    handleSubmitUpdate(item) {
      const {
        id,
        imei,
        model,
        brand,
        supplier,
        category,
        color,
        cost,
        price,
        remarks
      } = item;
      this.setSubmitState(true);
      this.updateItem({
        id,
        imei,
        model,
        brand,
        supplier,
        category,
        color,
        cost,
        price,
        remarks
      })
        .then(() => {
          this.setSubmitState(false);
          this.fetchStocks(
            `/api/stocks?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
          );
          $("#generic-modal").modal("hide");
        })
        .catch(error => {
          const response = error.response;
          this.responseStatus = response.status;
          this.errs = response;
          //   this.errs = parseError(error);
          //   console.log(this.errs);
          this.setSubmitState(false);
        });
    },
    handleDelete(item) {
      let options = { html: true, loader: true };
      //https://github.com/Godofbrowser/vuejs-dialog
      this.$dialog
        .confirm(`<h5>Delete this item ?</h5>`, options)
        .then(dialog => {
          this.deleteItem(item.id).then(() => {
            dialog.close();
            this.fetchStocks(
              `/api/stocks?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
            );
          });
        })
        .catch(() => {});
    },
    handleNavigate() {
      this.clearItem();
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
      const url = `${first_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
      this.fetchStocks(url);
    },
    prevPage(prev_page_url) {
      const url = `${prev_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
      this.fetchStocks(url);
    },
    nextPage(next_page_url) {
      const url = `${next_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
      this.fetchStocks(url);
    },
    lastPage(last_page_url) {
      const url = `${last_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
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
    await this.fetchModels("api/models");
    await this.fetchBrands("api/brands");
    await this.fetchCategories("api/categories");
    await this.fetchSuppliers("api/suppliers");
    await this.fetchStocks(
      `/api/stocks?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
    );
  }
};
</script>

<style></style>
