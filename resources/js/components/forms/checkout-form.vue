<template>
    <form
        data-vv-scope="CHECKOUT_FORM"
        @submit.prevent="onSubmit('CHECKOUT_FORM')"
    >
        <div class="form-row">
            <div class="form-group col-lg-6 col-md-6">
                <label for="input-1">Model</label>
                <select
                    v-model="item.model_id"
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
            <div class="form-group col-lg-6 col-md-6">
                <label for="input-4">IMEI</label>
                <input
                    v-model="item.imei"
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
        </div>
        <div class="form-row">
            <div class="form-group col-lg-6 col-md-6">
                <label for="input-1">Color</label>
                <select
                    v-model="item.color_id"
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
            <div class="form-group col-lg-6 col-md-6">
                <label for="input-4">Price</label>
                <input
                    v-model="item.selling_price"
                    name="price"
                    v-validate="'required'"
                    data-vv-as="price"
                    type="text"
                    class="form-control"
                    id="input-4"
                    placeholder=""
                />
                <small
                    class="form-text text-danger"
                    v-show="errors.has('CHECKOUT_FORM.price')"
                >
                    {{ errors.first("CHECKOUT_FORM.price") }}
                </small>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-lg-6 col-md-6">
                <label for="input-1">Amount</label>
                <input
                    v-model="item.amount"
                    name="amount"
                    v-validate="'required'"
                    type="text"
                    class="form-control"
                    id="input-1"
                    placeholder="0.00"
                />
                <small
                    class="form-text text-danger"
                    v-show="errors.has('CHECKOUT_FORM.amount')"
                >
                    {{ errors.first("CHECKOUT_FORM.amount") }}
                </small>
            </div>
            <div class="form-group col-lg-6 col-md-6">
                <label for="input-4">Mode of Payment</label>
                <select
                    v-model="item.payment_mode"
                    v-validate="'required'"
                    name="payment_mode"
                    id=""
                    class="form-control"
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
        </div>
        <div v-if="item.payment_mode === 'Home Credit'" class="form-group">
            <label for="">Home Credit Term</label>
            <select
                v-model="item.credit_term"
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
        <div class="form-group">
            <label>Freebies</label>
            <Select2
                v-model="item.freebies"
                :options="options"
                :settings="{
                    width: '100%',
                    placeholder: 'Select Freebies',
                    height: '37.03px',
                    multiple: true
                }"
            />
        </div>
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
    </form>
</template>

<script>
export default {
    props: {
        item: {
            required: true,
            type: Object
        },
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
            options: ["Powerbank", "Earphone", "Smartwatch"],
            payments: ["Cash", "Home Credit", "BDO", "BPI", "METROBANK"],
            card_types: ["BDO", "BPI", "METROBANK"]
        };
    },
    methods: {
        onSubmit(form) {
            let payload = {
                item_id: this.item.id,
                // model: this.item.model_id,
                // imei: this.item.imei,
                // color: this.item.color_id,
                // price: this.item.selling_price,
                amount: this.item.amount,
                payment_mode: this.item.payment_mode,
                credit_term: this.item.credit_term,
                freebies: this.item.freebies,
                form: this.$validator, // for resetting form on parent
                errors: this.errors // for clearing errors on paren
            };

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
    }
};
</script>

<style></style>
