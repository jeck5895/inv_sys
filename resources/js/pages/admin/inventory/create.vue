<template>
  <div class="row">
    <div class="col-lg-4">
      <card>
        <template v-slot:card-header>
          <h3 class="card-title mb-0 float-left">ADD STOCKS</h3>
        </template>
        <template v-slot:card-action>
          <div class="form-check form-check-inline">
            <input
              v-model="mode"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="single"
            />
            <label class="form-check-label" for="inlineRadio1">Single</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="mode"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="multiple"
            />
            <label class="form-check-label" for="inlineRadio2">Multiple</label>
          </div>
          <div v-if="mode === 'multiple'" class="form-inline mt-1">
            <input
              v-model="quantity"
              type="number"
              class="form-control form-control-sm"
              placeholder="Quantity"
            />
            <button
              @click="handleQuantity"
              :disabled="quantity === null"
              class="btn btn-primary btn-sm ml-2"
            >
              OK
            </button>
          </div>
        </template>
        <template v-slot:card-body>
          <div v-if="response_errors !== null" class="form-group">
            <validation-error-component
              :error-object="response_errors"
            ></validation-error-component>
          </div>
          <item-form
            :item="item"
            :mode="mode"
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
    <div v-if="submitted && mode === 'multiple'" class="col-lg-8 px-4">
      <div class="row">
        <div v-for="i in total_quantity" :key="i" class="col-lg-3 px-1">
          <div class="bg-white bordered p-2 mb-2">
            <div class="form-group">
              <label for="">Item {{ i }}</label>
              <input
                v-model="batch_items[i]"
                type="text"
                :name="`item-${i}`"
                class="form-control"
                placeholder="IMEI"
                :key="i"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../../components/card";
import ItemForm from "../../../components/forms/item-form";
import ValidationErrorComponent from "../../../components/validation-errors";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { store } from "../../../store";

export default {
  components: {
    Card,
    ItemForm,
    ValidationErrorComponent
  },
  computed: {
    ...mapGetters({
      brands: "BRANDS/GET_BRANDS",
      categories: "CATEGORIES/GET_CATEGORIES",
      colors: "COLORS/GET_COLORS",
      suppliers: "SUPPLIERS/GET_SUPPLIERS",
      models: "UNITS/GET_UNITS",
      submit_state: "ITEMS_MODULE/GET_SUBMIT_STATE"
    })
  },
  data: function() {
    return {
      item: this.$store.state.ITEMS_MODULE.item,
      mode: "single",
      quantity: null,
      total_quantity: 0,
      submitted: false,
      batch_items: [],
      response_errors: null
    };
  },
  methods: {
    ...mapActions({
      fetchBrands: "BRANDS/fetchBrands",
      fetchCategories: "CATEGORIES/fetchCategories",
      fetchColors: "COLORS/fetchColors",
      fetchSuppliers: "SUPPLIERS/fetchSuppliers",
      fetchModels: "UNITS/fetchUnits",
      store: "PURCHASES_MODULE/STORE",
      storeBulk: "PURCHASES_MODULE/STORE_BULK"
    }),
    ...mapMutations({
      setSubmitState: "ITEMS_MODULE/SET_SUBMIT_STATE",
      clearItem: "ITEMS_MODULE/CLEAR_ITEM"
    }),
    handleSubmit(evt) {
      if (this.mode === "single") {
        const {
          imei,
          model,
          brand,
          supplier,
          category,
          color,
          cost,
          price,
          remarks
        } = evt;
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
            this.response_errors = null;
            this.setSubmitState(false);
            this.reset(evt.form, evt.errors);
          })
          .catch(({ response }) => {
            this.response_errors = response.data.errors;
            this.setSubmitState(false);
          });
      } else {
        let item = {};
        let items = [];
        const {
          model,
          brand,
          supplier,
          category,
          color,
          cost,
          price,
          remarks
        } = evt;
        if (this.batch_items.length > 0) {
          this.batch_items.map(data => {
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
          this.storeBulk(payload).then(() => {
            this.batch_items = [];
            this.reset(evt.form, evt.errors);
          });
        } else {
          toastr.error("", "Please fill up IMEI for each item!");
        }
      }
    },
    handleQuantity() {
      this.submitted = true;
      this.total_quantity = parseInt(this.quantity);
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
      this.$set(this.item, "unit", "");
      this.$set(this.item, "brand", "");
      this.$set(this.item, "supplier", "");
      this.$set(this.item, "category", "");
      this.$set(this.item, "color", "");
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
