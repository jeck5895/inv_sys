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
              v-model="created_at"
              name="created_at"
              type="date"
              class="form-control"
              id="input-4"
              placeholder=""
            />
            <small
              class="form-text text-danger"
              v-show="errors.has('CHECKOUT_FORM.created_at')"
            >
              {{ errors.first("CHECKOUT_FORM.created_at") }}
            </small>
          </div>
          <div class="form-group col-lg-6 col-md-6">
            <label for="input-1">Receipt #</label>
            <input
              v-model="receipt_no"
              type="text"
              v-validate="'required'"
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
              @click="handleQuantity"
              :disabled="quantity === null"
              class="btn btn-primary btn-sm ml-2"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
    <template v-for="i in quantity">
      <div class="row" :key="i">
        <div class="col-lg-3 form-group">
          <label for="input-4">IMEI</label>
          <input
            v-model="items[i]"
            name="imei"
            v-validate="'required'"
            data-vv-as="imei"
            type="text"
            class="form-control"
            id="input-4"
            placeholder=""
          />
          <small
            class="form-text text-danger"
            v-show="errors.has('CHECKOUT_FORM.imei')"
          >
            {{ errors.first("CHECKOUT_FORM.imei") }}
          </small>
        </div>
        <div class="col-lg-3 form-group">
          <label for="input-1">Model</label>
          <select
            v-model="items[i]"
            v-validate="'required'"
            name="unit"
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
          <small
            class="form-text text-danger"
            v-show="errors.has('CHECKOUT_FORM.model')"
          >
            {{ errors.first("CHECKOUT_FORM.model") }}
          </small>
        </div>
        <div class="col-lg-3 form-group">
          <label for="input-1">Color</label>
          <select
            v-model="items[i]"
            v-validate="'required'"
            name="color"
            class="form-control"
          >
            <option value="">Select Color</option>
            <option
              v-for="color in colors"
              :key="color.name"
              :value="color.id"
              >{{ color.name }}</option
            >
          </select>
          <small
            class="form-text text-danger"
            v-show="errors.has('CHECKOUT_FORM.color')"
          >
            {{ errors.first("CHECKOUT_FORM.color") }}
          </small>
        </div>
        <div class="col-lg-3 form-group">
          <label for="input-4">Price</label>
          <input
            v-model="items[i]"
            name="price"
            v-validate="'required'"
            data-vv-as="price"
            type="text"
            class="form-control"
            id="price"
            placeholder=""
          />
          <small
            class="form-text text-danger"
            v-show="errors.has('CHECKOUT_FORM.price')"
          >
            {{ errors.first("CHECKOUT_FORM.price") }}
          </small>
        </div>
        <div class="col-lg-3 form-group">
          <label>Cost</label>
          <input
            v-model="items[i]"
            type="number"
            name="cost"
            id="cost"
            class="form-control"
          />
        </div>
        <div class="col-lg-3 form-group">
          <label for="input-1">Amount</label>
          <input
            v-model="items[i]"
            name="amount"
            v-validate="'required'"
            type="text"
            class="form-control"
            id="amount"
            placeholder="0.00"
          />
          <small
            class="form-text text-danger"
            v-show="errors.has('CHECKOUT_FORM.amount')"
          >
            {{ errors.first("CHECKOUT_FORM.amount") }}
          </small>
        </div>
        <div class="col-lg-3 form-group">
          <label for="input-4">Mode of Payment</label>
          <select
            v-model="items[i]"
            v-validate="'required'"
            name="payment_mode"
            id="payment_mode"
            class="form-control"
            data-vv-as="mode of payment"
          >
            <option value="">Select Mode of Payment</option>
            <option v-for="payment in payments" :key="payment" :value="payment">
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
        <div class="col-lg-3 form-group">
          <label for="">Home Credit Term</label>
          <select
            v-model="items[i]"
            name="home_credit_terms"
            class="form-control"
            data-vv-as="credit term"
          >
            <option value="12">12 Months</option>
            <option value="6">6 Months</option>
            <option value="3">3 Months</option>
          </select>
          <small
            class="form-text text-danger"
            v-show="errors.has('CHECKOUT_FORM.payment_mode')"
          >
            {{ errors.first("CHECKOUT_FORM.payment_mode") }}
          </small>
        </div>
        <div class="col-lg-3 form-group">
          <label>Freebies</label>
          <Select2
            v-model="items[i]"
            :options="options"
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
      <div class="col-lg-12">
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
    </div>
  </form>
</template>

<script>
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
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    return {
      items: [
        // {
        //   imei: "",
        //   model_id: "",
        //   color_id: "",
        //   selling_price: "",
        //   payment_mode: "",
        //   amount: "",
        //   cost: "",
        //   freebies: []
        // }
      ],
      options: ["Powerbank", "Earphone", "Smartwatch"],
      payments: ["Cash", "Home Credit", "BDO", "BPI", "METROBANK"],
      card_types: ["BDO", "BPI", "METROBANK"],
      mode: "single",
      quantity: null,
      total_quantity: 1,
      submitted: false,
      receipt_no: "",
      created_at: moment().format("Y-MM-DD")
    };
  },
  methods: {
    onSubmit(form) {
      console.log(this.items);
      //   let payload = {
      //     item_id: this.item.id,
      //     // model: this.item.model_id,
      //     // imei: this.item.imei,
      //     // color: this.item.color_id,
      //     // price: this.item.selling_price,
      //     amount: this.item.amount,
      //     payment_mode: this.item.payment_mode,
      //     credit_term: this.item.credit_term,
      //     freebies: this.item.freebies,
      //     form: this.$validator, // for resetting form on parent
      //     errors: this.errors // for clearing errors on paren
      //   };

      // if (this.item.payment_mode === "Home Credit") {
      //     payload = { ...payload, credit_term: this.item.credit_term };
      // }

      // if (this.item.freebies.length > 0) {
      //     payload = { ...payload, freebies: this.item.freebies };
      // }

      this.$validator.validateAll(form).then(valid => {
        if (valid) {
          this.$emit("on-submit", payload);
        }
      });
    }
  },
  watch: {
    item: function() {
      this.$validator.reset();
      this.errors.clear();
    }
  }
};
</script>

<style></style>
