<template>
    <form data-vv-scope="ITEM_FORM" @submit.prevent="handleSubmit('ITEM_FORM')">
        <div class="row">
            <div
                :class="{
                    'col-lg-4': mode === 'multiple',
                    'col-lg-12': mode === 'single'
                }"
            >
                <div v-show="showMode" class="form-inline form-group">
                    <div class="form-check form-check-inline">
                        <input
                            v-model="mode"
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="single"
                        />
                        <label class="form-check-label" for="inlineRadio1"
                            >Single</label
                        >
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
                        <label class="form-check-label" for="inlineRadio2"
                            >Multiple</label
                        >
                    </div>
                    <div v-if="mode === 'multiple'" style="width:50%;">
                        <input
                            v-model="quantity"
                            type="number"
                            class="form-control form-control-sm"
                            placeholder="Quantity"
                            style="width: 70%;"
                        />
                        <button
                            type="button"
                            @click="handleQuantity"
                            :disabled="quantity === 1"
                            class="btn btn-primary btn-sm ml-1"
                        >
                            OK
                        </button>
                    </div>
                </div>
                <div class="form-row">
                    <div
                        :class="{
                            'col-lg-12': mode === 'multiple',
                            'col-lg-6': mode === 'single',
                            'form-group': true,
                        }">
                        <label for="input-4">DELIVERY DATE</label>
                        <input
                            v-model="item.delivery_date"
                            name="delivery_date"
                            type="date"
                            class="form-control"
                            id="delivery_date"
                            v-validate="'required'"
                            placeholder=""
                        />
                        <small
                            class="form-text text-danger"
                            v-show="errors.has('ITEM_FORM.delivery_date')"
                        >
                            {{ errors.first("ITEM_FORM.delivery_date") }}
                        </small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-lg-6 col-md-6">
                        <label for="input-4">IMEI</label>
                        <input
                            v-model="item.imei"
                            name="imei"
                            v-validate="'required'"
                            data-vv-as="imei"
                            type="text"
                            class="form-control"
                            id="imei"
                            placeholder=""
                            :disabled="mode === 'multiple' ? true : false"
                        />
                        <small
                            class="form-text text-danger"
                            v-show="errors.has('ITEM_FORM.imei')"
                        >
                            {{ errors.first("ITEM_FORM.imei") }}
                        </small>
                    </div>
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
                                :key="model.name + '-unit'"
                                :value="model.id"
                                >{{ model.name }}</option
                            >
                        </select>
                        <small
                            class="form-text text-danger"
                            v-show="errors.has('ITEM_FORM.unit')"
                        >
                            {{ errors.first("ITEM_FORM.unit") }}
                        </small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-lg-6">
                        <label for="">Brand</label>
                        <select
                            v-model="item.brand_id"
                            v-validate="'required'"
                            name="brand"
                            class="form-control"
                        >
                            <option value="">Select Brand</option>
                            <option
                                v-for="brand in brands"
                                :key="brand.name + '-brand'"
                                :value="brand.id"
                                >{{ brand.name }}</option
                            >
                        </select>
                        <small
                            class="form-text text-danger"
                            v-show="errors.has('ITEM_FORM.brand')"
                        >
                            {{ errors.first("ITEM_FORM.brand") }}
                        </small>
                    </div>
                    <div class="form-group col-lg-6">
                        <label for="">Supplier</label>
                        <select
                            v-model="item.supplier_id"
                            v-validate="'required'"
                            name="supplier"
                            class="form-control"
                        >
                            <option value="">Select Supplier</option>
                            <option
                                v-for="supplier in suppliers"
                                :key="supplier.name + '-supplier'"
                                :value="supplier.id"
                                >{{ supplier.name }}</option
                            >
                        </select>
                        <small
                            class="form-text text-danger"
                            v-show="errors.has('ITEM_FORM.supplier')"
                        >
                            {{ errors.first("ITEM_FORM.supplier") }}
                        </small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-lg-6 col-md-6">
                        <label for="input-1">Category</label>
                        <select
                            v-model="item.category_id"
                            v-validate="'required'"
                            name="category"
                            class="form-control"
                        >
                            <option value="">Select Category</option>
                            <option
                                v-for="category in categories"
                                :key="category.name + '-category'"
                                :value="category.id"
                                >{{ category.name }}</option
                            >
                        </select>
                        <small
                            class="form-text text-danger"
                            v-show="errors.has('ITEM_FORM.category')"
                        >
                            {{ errors.first("ITEM_FORM.category") }}
                        </small>
                    </div>
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
                            v-show="errors.has('ITEM_FORM.color')"
                        >
                            {{ errors.first("ITEM_FORM.color") }}
                        </small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-lg-6 col-md-6">
                        <label for="input-1">Cost</label>
                        <input
                            v-model="item.cost"
                            name="cost"
                            v-validate="'required'"
                            type="number"
                            class="form-control"
                            id="cost"
                            placeholder="0.00"
                        />
                        <small
                            class="form-text text-danger"
                            v-show="errors.has('ITEM_FORM.cost')"
                        >
                            {{ errors.first("ITEM_FORM.cost") }}
                        </small>
                    </div>
                    <div class="form-group col-lg-6 col-md-6">
                        <label for="input-4">Price</label>
                        <input
                            v-model="item.selling_price"
                            name="price"
                            v-validate="'required'"
                            data-vv-as="price"
                            type="numer"
                            class="form-control"
                            id="price"
                            placeholder="0.00"
                        />
                        <small
                            class="form-text text-danger"
                            v-show="errors.has('ITEM_FORM.price')"
                        >
                            {{ errors.first("ITEM_FORM.price") }}
                        </small>
                    </div>
                </div>

                <div class="form-group">
                    <label for="">Remarks</label>
                    <textarea
                        v-model="item.remarks"
                        name="remarks"
                        id=""
                        cols="5"
                        rows="5"
                        class="form-control"
                    ></textarea>
                </div>

                <div class="form-group">
                    <button
                        :disabled="isLoading"
                        type="submit"
                        class="btn btn-success waves-effect"
                    >
                        <span v-if="!isLoading">Save</span>
                        <span v-else>Saving...</span>
                    </button>
                </div>
            </div>

            <div v-if="mode === 'multiple'" class="col-lg-8 px-4">
                <div class="row">
                    <div
                        v-for="i in total_quantity"
                        :key="i"
                        class="col-lg-3 px-1"
                    >
                        <div class="bg-white bordered p-2 mb-2">
                            <div class="form-group">
                                <label for="">Item {{ i }}</label>
                                <input
                                    v-model="batch_items[i]"
                                    type="text"
                                    :name="`item-imei-${i}`"
                                    class="form-control"
                                    placeholder="IMEI"
                                    data-vv-as="imei"
                                    :key="i"
                                    v-validate="'required'"
                                />
                                <small
                                    class="form-text text-danger"
                                    v-show="
                                        errors.has('ITEM_FORM.item-imei-' + i)
                                    "
                                >
                                    {{
                                        errors.first("ITEM_FORM.item-imei-" + i)
                                    }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        brands: {
            type: Array,
            required: true
        },
        categories: {
            type: Array,
            required: true
        },
        colors: {
            type: Array,
            required: true
        },
        suppliers: {
            type: Array,
            required: true
        },
        models: {
            type: Array,
            required: true
        },
        isLoading: {
            required: true,
            type: Boolean
        },
        showMode: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            mode: "single",
            quantity: 1,
            total_quantity: 1,
            submitted: false,
            batch_items: []
        };
    },
    methods: {
        handleQuantity() {
            this.submitted = true;
            this.total_quantity = parseInt(this.quantity);
        },
        handleSubmit(form) {
            let payload = {
                id: this.item.id,
                model: this.item.model_id,
                brand: this.item.brand_id,
                color: this.item.color_id,
                price: this.item.selling_price,
                cost: this.item.cost,
                category: this.item.category_id,
                remarks: this.item.remarks,
                supplier: this.item.supplier_id,
                delivery_date: this.item.delivery_date,
                mode: this.mode,
                form: this.$validator, // for resetting form on parent
                errors: this.errors // for clearing errors on paren
            };

            if (this.mode === "single") {
                payload = {
                    ...payload,
                    imei: this.item.imei
                };
            }
            if (this.mode === "multiple") {
                payload = {
                    ...payload,
                    batch_items: this.batch_items
                };
            }

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
            this.batch_items = [];
        }
    }
};
</script>

<style></style>
