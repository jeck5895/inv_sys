<template>
    <div class="modal fade" id="itemquantitymodal">
        <div class="modal-dialog">
            <div class="modal-content border-primary">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white"><i class="fa fa-plus-square"></i>Purchase Details</h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card bg-primary shadow-primary">
                        <div class="card-body">
                            <hr>
                            <form data-vv-scope="ITEM_QUANTITY_FORM" class="color-form">
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <div v-if="response.length" class="alert alert-danger alert-dismissible" role="alert">
                                            <!-- <button type="button" class="close" data-dismiss="alert">&times;</button> -->
                                            <div class="alert-icon">
                                                <i class="icon-close"></i>
                                            </div>
                                            <div class="alert-message">
                                                <!-- <p><strong>{{ response.data.message }}</strong></p> -->
                                                <ul>
                                                    <li v-for="(e,i) in response" :key="i">
                                                        {{ e }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="input-1">Item</label>
                                    <select 
                                        v-model="purchase.item"
                                        v-validate="'required'"
                                        class="form-control"
                                        name="item" id="item">
                                        <option value="">Select Item</option>
                                        <option 
                                            v-for="item in items" :key="item.id"
                                            :value="item.id">
                                            {{ item.item_name }}
                                        </option>
                                    </select>
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_QUANTITY_FORM.item')">
                                        {{  errors.first('ITEM_QUANTITY_FORM.item_') }}
                                    </small>
                                </div>
                                <!-- <div class="form-group">
                                    <label for="basic-select">Unit</label>
                                    <select 
                                        v-model="item.unit"
                                        name="unit"
                                        v-validate="'required'"
                                        class="form-control" id="basic-select">
                                        <option style="color:gray">Please Select Unit</option>
                                        <option v-for="item in units" 
                                                :key="item.unit_name"
                                                :value="item.id">
                                            {{ item.unit_name }}
                                        </option>
                                    </select>
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_QUANTITY_FORM.unit')">
                                        {{  errors.first('ITEM_QUANTITY_FORM.unit') }}
                                    </small>
                                </div> -->
                                <div class="form-group">
                                    <label for="input-6">Quantity</label>
                                    <input 
                                        v-model="purchase.quantity"
                                        name="quantity"
                                        v-validate="'required|min_value:1|numeric'"
                                        type="number" class="form-control" id="input-6" placeholder="Enter Quantity">
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_QUANTITY_FORM.quantity')">
                                        {{  errors.first('ITEM_QUANTITY_FORM.quantity') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="input-7">Price per Item</label>
                                    <input 
                                        v-model="purchase.price_per_item"
                                        @blur="computeTotalAmount"
                                        name="price_per_item"
                                        v-validate="'required'"
                                        data-vv-as="price per item"
                                        type="text" class="form-control" id="input-7" placeholder="Enter Price">
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_QUANTITY_FORM.price_per_item')">
                                        {{  errors.first('ITEM_QUANTITY_FORM.price_per_item') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="input-7">Total Amount</label>
                                    <input 
                                        v-model="purchase.total_amount"
                                        name="total_amount"
                                        v-validate="'required'"
                                        data-vv-as="total amount"
                                        type="text" class="form-control" id="input-7" placeholder="Enter Price">
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_QUANTITY_FORM.total_amount')">
                                        {{  errors.first('ITEM_QUANTITY_FORM.total_amount') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="input-7">DR Number</label>
                                    <input 
                                        v-model="purchase.dr_number"
                                        name="dr_number"
                                        v-validate="'required'"
                                        data-vv-as="DR number"
                                        type="text" class="form-control" id="input-7" placeholder="Enter DR Number">
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_QUANTITY_FORM.dr_number')">
                                        {{  errors.first('ITEM_QUANTITY_FORM.dr_number') }}
                                    </small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-inverse-primary" data-dismiss="modal"><i class="fa fa-times"></i>
                        Close</button>
                    <button @click.prevent="handleSubmit('ITEM_QUANTITY_FORM')" :disabled="isLoading" type="button" class="btn btn-primary">
                        <span v-if="!isLoading">
                            <i class="fa fa-floppy-o"></i> Save
                        </span>
                        <span v-else>Saving...</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        purchase () {
            return this.$store.getters['PURCHASES_MODULE/GET_PURCHASE'];
        },
        items () {
            return this.$store.getters['ITEMS_MODULE/GET_ITEMS_LIST'];
        }
    },
    data: () => ({
        isLoading: false,
        response: [],
    }),
    methods: {
        computeTotalAmount () {
            let total_amount = 0;

            total_amount = parseFloat(this.purchase.quantity) * parseFloat(this.purchase.price_per_item);
            this.purchase.total_amount = total_amount.toFixed(2);
        },
        handleSubmit (form) {
            this.$validator.validateAll(form).then(result => {
                if(result) {
                    let payload = {
                        item_id: this.purchase.item,
                        purchase_quantity: this.purchase.quantity,
                        price_per_item: this.purchase.price_per_item,
                        total_amount: this.purchase.total_amount,
                        dr_number: this.purchase.dr_number
                    };

                    this.isLoading = true;
                    this.$store.dispatch('PURCHASES_MODULE/STORE_PURCHASE', payload)
                    .then(response => {
                        this.isLoading = false;
                        this.response = [];
                        this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS');
                        $("#itemquantitymodal").modal('hide');
                    })
                    .catch(error => {
                        let obj = error.response;
                        let keys = Object.keys(obj.data.errors);
                                
                        this.response = [];

                        if(keys.length > 0) {  
                            keys.forEach(e => {
                                obj.data.errors[e].forEach(d => {
                                    this.response.push(d);
                                })
                            });
                        }
                        this.isLoading = false;
                    })
                }
            })
        }
    }
}
</script>

<style>

</style>
