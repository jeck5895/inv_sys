<template>
  <form
    data-vv-scope="CHECKOUT_FORM"
    @submit.prevent="onSubmit('CHECKOUT_FORM')"
  >
    <div class="row">
      <div class="col-lg-6">
        <div class="form-row">
          <div class="form-group col-lg-6 col-md-6">
            <label for="input-4">DATE</label>
            <input
              v-model="checkout_date"
              name="checkout_date"
              type="date"
              class="form-control"
              id="input-4"
              placeholder=""
            />
            <small
              class="form-text text-danger"
              v-show="errors.has('CHECKOUT_FORM.checkout_date')"
            >
              {{ errors.first("CHECKOUT_FORM.checkout_date") }}
            </small>
          </div>
          <div class="form-group col-lg-6 col-md-6">
            <label for="input-1">Receipt #</label>
            <input
              v-model="receipt_no"
              type="text"
              v-validate="'required'"
              data-vv-as="Receipt"
              name="receipt_no"
              class="form-control"
            />
            <small
              class="form-text text-danger"
              v-show="errors.has('CHECKOUT_FORM.receipt_no')"
            >
              {{ errors.first("CHECKOUT_FORM.receipt_no") }}
            </small>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-row">
          <div class="col-lg-6 form-group">
            <label for="input-4">Mode of Payment</label>
            <select
              v-model="payment_mode"
              name="payment_mode"
              id="payment_mode"
              class="form-control"
              v-validate="'required'"
              data-vv-as="mode of payment"
            >
              <option value="">Select Mode of Payment</option>
              <option
                v-for="payment in payments"
                :key="payment"
                :value="payment"
              >
                {{ payment }}
              </option>
            </select>
            <small
              class="form-text text-danger"
              v-show="errors.has('CHECKOUT_FORM.payment_mode')"
            >
              {{ errors.first("CHECKOUT_FORM.payment_mode") }}
            </small>
          </div>
          <div
            v-if="payment_mode === 'HOME CREDIT'"
            class="col-lg-6 form-group"
          >
            <label for="">Home Credit Term</label>
            <select
              v-model="payment_terms"
              name="home_credit_terms"
              class="form-control"
              data-vv-as="credit term"
            >
              <option value="12">12 Months</option>
              <option value="6">6 Months</option>
              <option value="3">3 Months</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <label for="input-4">Checkout Mode</label>
        <div class="form-group">
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
              type="button"
              @click="handleQuantity"
              class="btn btn-primary btn-sm ml-2"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
    <template v-for="(item, i) in items">
      <div
        style="position: relative"
        :class="{ row: true, 'border-bottom mb-3': items.length > 1 }"
        :key="i"
      >
        <div class="col-lg-12">
          <button
            v-if="items.length > 1 && i !== 0"
            @click="removeItem(i)"
            type="button"
            style="padding: .25rem .5rem;"
            class="btn btn-danger btn-sm rounded-circle"
          >
            <i class="fa fa-times-circle"></i>
          </button>
        </div>

        <div class="col-lg-3 form-group">
          <label for="input-4">IMEI</label>
          <input
            v-model="item.imei"
            v-validate="'required'"
            :name="'imei-' + i"
            data-vv-as="IMEI"
            type="text"
            class="form-control"
            id="input-4"
            placeholder=""
            @blur="onBlur(item.imei, i)"
          />
          <small
            class="form-text text-danger"
            v-show="errors.has('CHECKOUT_FORM.imei-' + i)"
          >
            {{ errors.first("CHECKOUT_FORM.imei-" + i) }}
          </small>
        </div>
        <div class="col-lg-3 form-group">
          <label for="input-1">Model</label>
          <select
            disabled
            v-model="item.model_id"
            :name="'unit-' + i"
            class="form-control"
          >
            <option value="">Select Unit</option>
            <option
              v-for="model in models"
              :key="model.name"
              :value="model.id"
              >{{ model.name }}</option
            >
          </select>
        </div>
        <div class="col-lg-3 form-group">
          <label for="input-1">Color</label>
          <select
            v-model="item.color_id"
            :name="'color-' + i"
            class="form-control"
            disabled
          >
            <option value="">Select Color</option>
            <option
              v-for="color in colors"
              :key="color.name"
              :value="color.id"
              >{{ color.name }}</option
            >
          </select>
        </div>
        <div class="col-lg-3 form-group">
          <label for="input-1">Brand</label>
          <select
            v-model="item.brand_id"
            :name="'color-' + i"
            class="form-control"
            disabled
          >
            <option value="">Select Brand</option>
            <option
              v-for="brand in brands"
              :key="brand.name"
              :value="brand.id"
              >{{ brand.name }}</option
            >
          </select>
        </div>
        <div class="col-lg-3 form-group">
          <label for="input-4">Price</label>
          <input
            v-model="item.selling_price"
            :name="'price-' + i"
            type="text"
            class="form-control"
            id="price"
            placeholder=""
            disabled
          />
        </div>

        <div class="col-lg-9 form-group">
          <label>Freebies</label>
          <Select2
            :name="'freebies-' + i"
            v-model="item.freebies"
            :options="freebies"
            :settings="{
              width: '100%',
              placeholder: 'Select Freebies',
              height: '37.03px',
              multiple: true
            }"
          />
        </div>
      </div>
    </template>

    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <button
            :disabled="isLoading"
            type="submit"
            class="btn btn-success waves-effect"
          >
            <span v-if="!isLoading">Checkout</span>
            <span v-else>Processing...</span>
          </button>
        </div>
      </div>
      <div class="col-lg-6 form-group">
        <label for="total" class="mr-4">Total</label>
        <input
          v-model="total_amount"
          name="total_amount"
          type="text"
          class="form-control"
          id="total"
          placeholder=""
        />
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    // items: {
    //   required: true,
    //   type: Array
    // },
    models: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    },
    brands: {
      type: Array,
      required: true
    },
    freebies: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    resetForm: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    return {
      items: [
        {
          imei: "",
          model_id: "",
          color_id: "",
          selling_price: "",
          payment_mode: "",
          amount: "",
          freebies: []
        }
      ],
      options: ["Powerbank", "Earphone", "Smartwatch"],
      payments: ["CASH", "HOME CREDIT", "BDO", "BPI", "METROBANK"],
      card_types: ["BDO", "BPI", "METROBANK"],
      mode: "single",
      quantity: 1,
      submitted: false,
      receipt_no: "",
      checkout_date: moment().format("Y-MM-DD"),
      payment_mode: "",
      payment_terms: "",
      total_amount: 0
    };
  },
  methods: {
    ...mapActions({
      findItemBy: "PURCHASES/FIND_BY"
    }),
    onSubmit(form) {
      let payload = {
        items: this.items,
        payment_mode: this.payment_mode,
        total_amount: this.total_amount,
        receipt_no: this.receipt_no,
        checkout_date: this.checkout_date,
        form: this.$validator, // for resetting form on parent
        errors: this.errors // for clearing errors on paren
      };

      if (this.payment_mode === "HOME CREDIT") {
        payload = { ...payload, payment_terms: this.payment_terms };
      }

      this.$validator.validateAll(form).then(valid => {
        if (valid) {
          this.$emit("on-submit", payload);
        }
      });
    },
    handleQuantity() {
      let i;
      this.items = [];
      for (i = 0; i < this.quantity; i++) {
        this.items.push({
          id: "",
          imei: "",
          model_id: "",
          color_id: "",
          selling_price: "",
          brand_id: "",
          freebies: []
        });
      }
    },
    removeItem(index) {
      this.items.splice(this.items.indexOf(index), 1);
    },
    async onBlur(val, index) {
      const payload = {
        field: "imei",
        value: val
      };
      if (val !== "") {
        await this.findItemBy(payload)
          .then(response => {
            const {
              id,
              imei,
              brand_id,
              color_id,
              model_id,
              selling_price
            } = response;
            // this.$set(news, "is_bookmarked", true);
            this.items[index].id = id;
            this.items[index].imei = imei;
            this.items[index].brand_id = brand_id;
            this.items[index].color_id = color_id;
            this.items[index].model_id = model_id;
            this.items[index].selling_price = selling_price;
          })
          .catch(error => {
            if (error.status === 404) {
              toastr.error("No matching item found.", "404");
            }
          });

        const total_amount = this.items.reduce(
          (acc, item) => acc + item.selling_price,
          0
        );
        this.total_amount = total_amount;
      }

      //   this.$emit("on-blur", val);
    }
  },
  watch: {
    // reset form
    resetForm: function(val) {
      if (val) {
        this.items = [
          {
            imei: "",
            model_id: "",
            color_id: "",
            selling_price: "",
            payment_mode: "",
            amount: "",
            freebies: []
          }
        ];
        this.receipt_no = "";
        this.payment_mode = "";
        this.payment_terms = "";
        this.total_amount = 0;
        this.$validator.reset();
        this.errors.clear();
        this.$emit("on-reset", true);
      }
    }
  }
};
</script>

<style></style>
