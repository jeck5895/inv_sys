<template>
  <div class="row">
    <div class="col-lg-12">
      <card>
        <template v-slot:card-header> </template>
        Checkout
        <template v-slot:card-body>
          <checkout-form
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
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Card,
    CheckoutForm
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
      models: "UNITS/GET_UNITS"
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
      save: "SALES/STORE"
    }),
    async handleCheckout(payload) {
      const {
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

      await this.save(formData)
        .then(response => {
          this.resetForm = true;
        })
        .catch(error => {
          console.log(error.response);
          //toastr.error("An error occured");
        });
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
  }
};
</script>

<style>
</style>
