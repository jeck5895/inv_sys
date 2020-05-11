<template>
  <div class="row">
    <div class="col-lg-12">
      <card>
        <template v-slot:card-header>
          <h4 class="mb-0">
            <span v-if="$route.name === 'create-sales'">Checkout</span>
            <span v-else>Edit {{ sales_item.receipt_no }}</span>
          </h4>
        </template>

        <template v-slot:card-body>
          <checkout-form
            :sales-item="sales_item"
            :is-loading="is_saving"
            :reset-form="resetForm"
            :models="models"
            :colors="colors"
            :brands="brands"
            :freebies="freebies"
            @on-submit="handleCheckout"
            @on-reset="handleFormReset"
          >
          </checkout-form>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from "../../../components/card";
import CheckoutForm from "../../../components/forms/checkout-form";
import moment from "moment";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Card,
    CheckoutForm
  },
  watch: {
    $route(to, from) {
      this.resetForm = true;
    }
  },
  data() {
    return {
      resetForm: false
    };
  },
  computed: {
    ...mapGetters({
      is_saving: "SALES/GET_SUBMIT_STATE",
      brands: "BRANDS/GET_BRANDS",
      categories: "CATEGORIES/GET_CATEGORIES",
      colors: "COLORS/GET_COLORS",
      suppliers: "SUPPLIERS/GET_SUPPLIERS",
      models: "UNITS/GET_UNITS",
      sales_item: "SALES/GET_SALES_ITEM"
    }),
    freebies() {
      let freebies = [];
      const list = this.$store.getters["FREEBIES/GET_FREEBIES"];

      list.map(item => {
        freebies.push({ id: item.id, text: item.name });
      });

      return freebies;
    }
  },
  methods: {
    ...mapActions({
      fetchBrands: "BRANDS/fetchBrands",
      fetchCategories: "CATEGORIES/fetchCategories",
      fetchColors: "COLORS/fetchColors",
      fetchSuppliers: "SUPPLIERS/fetchSuppliers",
      fetchModels: "UNITS/fetchUnits",
      fetchFreebies: "FREEBIES/fetchFreebies",
      save: "SALES/STORE",
      update: "SALES/UPDATE",
      findBy: "SALES/FIND_BY"
    }),
    ...mapMutations("SALES", {
      clear: "CLEAR_SALES_ITEM"
    }),
    async handleCheckout(payload) {
      const {
        id,
        action,
        items,
        payment_mode,
        total_amount,
        receipt_no,
        checkout_date,
        payment_terms,
        form, // for resetting form on parent
        errors
      } = payload;

      let formData = {
        items,
        payment_mode,
        receipt_no,
        checkout_date,
        total_amount
      };

      if (payment_terms != undefined) {
        formData = { ...formData, payment_terms };
      }

      if (id === undefined) {
        await this.save(formData)
          .then(response => {
            this.resetForm = true;
          })
          .catch(error => {
            console.log(error.response);
          });
      } else {
        formData = { ...formData, id };
        await this.update(formData);
      }

      console.log(payload);
    },
    handleQuantity() {
      this.submitted = true;
      this.total_quantity = parseInt(this.quantity);
    },
    handleFormReset(val) {
      if (val) {
        this.resetForm = false;
      }
    }
  },
  async created() {
    await this.fetchBrands("api/brands");
    await this.fetchCategories("api/categories");
    await this.fetchColors("api/colors");
    await this.fetchSuppliers("api/suppliers");
    await this.fetchModels("api/models");
    await this.fetchFreebies("api/freebies");
  },
  async beforeRouteEnter(to, from, next) {
    const { name, params } = to;
    const { receipt } = params;
    if (name === "edit-sales") {
      await store
        .dispatch("SALES/FIND_BY", {
          field: "receipt_no",
          value: receipt
        })
        .catch(error => {
          if (error.status === 404) {
            toastr.error("No matching item found.", "404");
            next({ name: "sales" });
          }
        });
    }
    if (name === "create-sales") {
      store.commit("SALES/CLEAR_SALES_ITEM");
    }
    next();
  }
};
</script>

<style>
</style>
