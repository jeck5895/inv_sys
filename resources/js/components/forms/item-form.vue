<template>
    <form data-vv-scope="ITEM_FORM" @submit.prevent="handleSubmit('ITEM_FORM')">
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
                        :key="model.name"
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
                        :key="brand.name"
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
                        :key="supplier.name"
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
                        :key="category.name"
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
                    type="text"
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
                    type="text"
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
    </form>
</template>

<script>
export default {
    props: {
        item: {
            required: true,
            type: Object
        },
        mode: {
            type: String
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
        }
    },
    methods: {
        handleSubmit(form) {
            let payload = {
                model: this.item.unit,
                brand: this.item.brand_id,
                color: this.item.color_id,
                price: this.item.selling_price,
                cost: this.item.cost,
                category: this.item.category_id,
                remarks: this.item.remarks,
                supplier: this.item.supplier_id,
                form: this.$validator,
                errors: this.errors
            };

            if (this.mode === "single") {
                payload = {
                    ...payload,
                    imei: this.item.imei
                };
            }

            this.$validator.validateAll(form).then(valid => {
                if (valid) {
                    this.$emit("on-submit", payload);
                }
            });
        }
    },
    mounted() {
        console.log(this.$validator);
    }
};
</script>

<style></style>
