<template>
  <div class="row">
    <div class="col-lg-12">
      <card>
        <template v-slot:card-header>
          <h3 class="card-title mb-0 float-left">ADD STOCKS</h3>
        </template>
        <template v-slot:card-action> </template>
        <template v-slot:card-body>
          <div v-if="response !== null" class="col-lg-4 form-group">
            <alert :response="response"></alert>
          </div>
          <item-form
            :item="item"
            :brands="brands"
            :categories="categories"
            :colors="colors"
            :suppliers="suppliers"
            :models="models"
            :is-loading="submit_state"
            @on-submit="handleSubmit"
          ></item-form>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from "../../../components/card";
import ItemForm from "../../../components/forms/item-form";
import Alert from "../../../components/alerts/error.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { store } from "../../../store";

export default {
  components: {
    Card,
    ItemForm,
    Alert
  },
  computed: {
    ...mapGetters({
      brands: "BRANDS/GET_BRANDS",
      categories: "CATEGORIES/GET_CATEGORIES",
      colors: "COLORS/GET_COLORS",
      suppliers: "SUPPLIERS/GET_SUPPLIERS",
      models: "UNITS/GET_UNITS",
      submit_state: "ITEMS/GET_SUBMIT_STATE"
    })
  },
  data: function() {
    return {
      item: this.$store.state.ITEMS.item,
      response: null
    };
  },
  methods: {
    ...mapActions({
      fetchBrands: "BRANDS/fetchBrands",
      fetchCategories: "CATEGORIES/fetchCategories",
      fetchColors: "COLORS/fetchColors",
      fetchSuppliers: "SUPPLIERS/fetchSuppliers",
      fetchModels: "UNITS/fetchUnits",
      store: "ITEMS/STORE",
      storeBulk: "ITEMS/STORE_BULK"
    }),
    ...mapMutations({
      setSubmitState: "ITEMS/SET_SUBMIT_STATE",
      clearItem: "ITEMS/CLEAR_ITEM"
    }),
    handleSubmit(evt) {
      //   console.log(evt);
      const {
        imei,
        model,
        brand,
        supplier,
        category,
        color,
        cost,
        price,
        remarks,
        mode
      } = evt;
      if (mode === "single") {
        this.setSubmitState(true);

        this.store({
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
            this.response = null;
            this.setSubmitState(false);
            this.reset(evt.form, evt.errors);
          })
          .catch(({ response }) => {
            this.response = response;
            this.setSubmitState(false);
          });
      } else {
        let item = {};
        let items = [];
        const { batch_items } = evt;
        //   const {
        //     model,
        //     brand,
        //     supplier,
        //     category,
        //     color,
        //     cost,
        //     price,
        //     remarks,
        //   } = evt;

        batch_items.map(data => {
          item = {
            model,
            brand,
            supplier,
            category,
            color,
            cost,
            price,
            remarks,
            imei: data
          };
          items.push(item);
        });
        const payload = {
          items
        };

        this.setSubmitState(true);

        this.storeBulk(payload)
          .then(() => {
            this.response = null;
            this.setSubmitState(false);
            this.reset(evt.form, evt.errors);
          })
          .catch(({ response }) => {
            this.response = response;
            this.setSubmitState(false);
          });
      }
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
        },
        {
          text: "Add",
          link: "/administrator/inventory/create"
        }
      ];
      this.$store.commit("setBreadcrumbs", breadcrumbs);
    },
    reset(form, errors) {
      this.$set(this.item, "imei", "");
      this.$set(this.item, "model_id", "");
      this.$set(this.item, "brand_id", "");
      this.$set(this.item, "supplier_id", "");
      this.$set(this.item, "category_id", "");
      this.$set(this.item, "color_id", "");
      this.$set(this.item, "cost", null);
      this.$set(this.item, "selling_price", null);
      this.$set(this.item, "remarks", "");

      form.reset();
      errors.clear();
    }
  },
  mounted() {
    this.setBreadcrumbs();
  },
  async created() {
    await this.fetchBrands("api/brands");
    await this.fetchCategories("api/categories");
    await this.fetchColors("api/colors");
    await this.fetchSuppliers("api/suppliers");
    await this.fetchModels("api/models");
  }
};
</script>

<style></style>
