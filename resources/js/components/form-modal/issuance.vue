<template>
    <form @submit.prevent="handleSubmit('SALES_FORM')" data-vv-scope="SALES_FORM" class="color-form">
        <div class="form-group row">
            <div class="col-md-12">
                <div v-if="response != null && response.status == 422" class="alert alert-danger alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <div class="alert-icon">
                        <i class="icon-close"></i>
                    </div>
                    <div class="alert-message">
                        <p><strong>{{ response.data.message }}</strong></p>
                        <ul v-if="response.data.errors">
                            <template v-if="response.data.errors.customer_type">
                                <li v-for="e in response.data.errors.customer_type" :key="e">{{ e }}</li>
                            </template>
                            <template v-if="response.data.errors.quantity">
                                <li v-for="e in response.data.errors.quantity" :key="e">{{ e }}</li>
                            </template>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="input-38" class="col-sm-12 col-form-label">Customer Type</label>
            <div class="col-sm-12">
                <select
                    v-validate="'required'"
                    v-model="customer.customer_type"
                    name="customer_type"
                    data-vv-as="customer type"
                    class="form-control" id="basic-select">
                        <option value="" style="color:gray">Please Select Item</option>
                        <option v-for="item in customer_types" :key="item.value" :value="item.value">
                            {{ item.label }}
                        </option>
                </select>
                <small class="form-text text-danger" v-show="errors.has('SALES_FORM.customer_type')">
                    {{  errors.first('SALES_FORM.customer_type') }}
                </small>
            </div>
        </div>
        <div class="form-group row">
            <label for="input-36" class="col-sm-12 col-form-label">
                <span v-if="customer.customer_type == 'student'">
                    Student ID
                </span>
                <span v-else-if="customer.customer_type == 'faculty'"> Faculty ID</span>
                <span v-else>Customer ID</span>
            </label>
            <div class="col-sm-12">
                <input 
                    v-model="customer.customer_id"
                    name="customer_id"
                    type="text" class="form-control" id="input-36" placeholder="Enter Student Number">
            </div>
        </div>
        <div class="form-group row">
            <label for="input-33" class="col-sm-12 col-form-label">Full Name</label>
            <div class="col-sm-12">
                <input 
                    v-validate="'required'"
                    v-model="customer.fullname"
                    name="fullname"
                    type="text" class="form-control" id="input-33" placeholder="Enter customer full name">
                <small class="form-text text-danger" v-show="errors.has('SALES_FORM.fullname')">
                    {{  errors.first('SALES_FORM.fullname') }}
                </small>
            </div>
        </div>
        <div class="form-group row">
            <label for="input-33" class="col-sm-12 col-form-label">Fund</label>
            <div class="col-sm-12">
                <input 
                    v-validate="'required'"
                    v-model="customer.fund"
                    name="fund"
                    type="number" class="form-control" id="input-34" placeholder="Enter fund">
                <small class="form-text text-danger" v-show="errors.has('SALES_FORM.fund')">
                    {{  errors.first('SALES_FORM.fund') }}
                </small>
            </div>
        </div>
        <div class="form-group row">
            <label for="input-35" class="col-sm-12 col-form-label">Department</label>
            <div class="col-sm-12">
                <input 
                    v-model="customer.department"
                    name="department"
                    type="text" class="form-control" id="input-35" placeholder="Enter Department">
            </div>
        </div>

        <!-- <div class="form-group row">
            <label for="input-38" class="col-sm-12 col-form-label">Item Name</label>
            <div class="col-sm-12">
                <select
                    v-validate="'required'" 
                    v-model="customer.item_id"
                    name="item"
                    class="form-control" id="basic-select">
                        <option value="" style="color:gray">Please Select Item</option>
                        <option v-for="item in items" :key="item.item_name" :value="item.id"> {{ item.item_name }} </option>
                </select>
                <small class="form-text text-danger" v-show="errors.has('SALES_FORM.item')">
                    {{  errors.first('SALES_FORM.item') }}
                </small>
            </div>
        </div>

        <div class="form-group row">
            <label for="input-37" class="col-sm-12 col-form-label">Quanity</label>
            <div class="col-sm-12">
                <input
                    v-validate="'required|min_value:1|numeric'"
                    v-model="customer.quantity"
                    name="quantity"
                    type="number" class="form-control" id="input-37" placeholder="Enter Quantity">
                    <small class="form-text text-danger" v-show="errors.has('SALES_FORM.quantity')">
                        {{  errors.first('SALES_FORM.quantity') }}
                    </small>
            </div>
        </div> -->

        <div class="form-group row">
            <label for="input-38" class="col-sm-12 col-form-label">Remarks
                (Optional)</label>
            <div class="col-sm-12">
                <input 
                    v-model="customer.remarks"
                    type="text" class="form-control" id="input-38" placeholder="Enter Remarks">
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-12">
                <button 
                    :disabled="isLoading"
                    type="submit" class="btn btn-link bg-white text-info shadow px-5"><i class="icon-check"></i>
                    <span v-if="!isLoading">Submit</span>
                    <span v-else>Submitting ...</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data: () => ({
            isLoading: false,
            response: [],
            customer_types: [
                { value: 'faculty', label: 'Faculty' },
                { value: 'student', label: 'Student' },
                { value: 'others', label: 'Others' }
            ]
        }),
        computed: {
            customer () {
                return this.$store.getters['SALES_MODULE/GET_CUSTOMER'];
            },
            cart () {
                return this.$store.getters['CART_MODULE/GET_CART_ITEMS'];
            }
        },
        methods: {
            handleSubmit (form) {
                this.$validator.validateAll(form)
                .then(response => {
                    if(response) {
                        if(this.cart.length > 0) {
                            this.isLoading = true;
                            let payload = {
                                customer_type: this.customer.customer_type,
                                customer_id: this.customer.customer_id,
                                fullname: this.customer.fullname,
                                fund: this.customer.fund,
                                department: this.customer.department,
                                items: this.cart,
                                // item_id: this.customer.item_id,
                                // quantity: this.customer.quantity,
                                remarks: this.customer.remarks
                            };

                            this.$store.dispatch('SALES_MODULE/STORE_SALE', payload)
                            .then(response => {
                                var baseURL = window.location.protocol + "//" + window.location.host;
                                window.open(`${baseURL}/sales/receipt?transaction_no=${response.data.transaction_no}`, 'Receipt for ' + response.data.transaction_no, 'width=700,heigth=300');
                                this.isLoading = false;
                                this.response = [];
                                this.$store.dispatch('SALES_MODULE/FETCH_SALES');
                                this.$store.commit('CART_MODULE/CLEAR_ITEMS');
                                this.$store.commit('SALES_MODULE/CLEAR_CUSTOMER');
                                toastr.success('Success', 'Sales has been saved');
                                
                            })
                            .catch(error => {
                                // toastr.error('Error', error.response.data);
                                this.response = [];
                                this.response = error.response;
                                this.isLoading = false;
                            })
                        } 
                        else {
                            toastr.warning('Your cart is empty')
                        }
                    }
                })

            }
        }
    }
</script>

<style>

</style>