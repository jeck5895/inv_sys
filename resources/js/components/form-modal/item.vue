<template>
    <div class="modal fade" id="addmodal">
        <div class="modal-dialog">
            <div class="modal-content border-primary">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white"><i class="fa fa-plus-square"></i>Item Details</h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card bg-primary shadow-primary">
                        <div class="card-body">
                            <hr>
                            <form data-vv-scope="ITEM_FORM" class="color-form">
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
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="input-1">Item Name</label>
                                        <input 
                                            v-model="item.item_name"
                                            name="item_name"
                                            v-validate="'required'"
                                            type="text" class="form-control" id="input-1" placeholder="Enter Item Name">
                                        <small class="form-text text-danger" v-show="errors.has('ITEM_FORM.quantity')">
                                            {{  errors.first('ITEM_FORM.item_name') }}
                                        </small>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="input-4">Item Code</label>
                                        <input 
                                            v-model="item.item_code"
                                            name="item_code"
                                            v-validate="'required'"
                                            data-vv-as="item code"
                                            type="text" class="form-control" id="input-4" placeholder="Enter Item Code">
                                        <small class="form-text text-danger" v-show="errors.has('ITEM_FORM.item_code')">
                                            {{  errors.first('ITEM_FORM.item_code') }}
                                        </small>
                                    </div>
                                </div>
                                <div class="form-group">
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
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_FORM.unit')">
                                        {{  errors.first('ITEM_FORM.unit') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="input-6">Quantity</label>
                                    <input 
                                        v-model="item.quantity"
                                        name="quantity"
                                        v-validate="'required|min_value:1|numeric'"
                                        type="number" class="form-control" id="input-6" placeholder="Enter Quantity">
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_FORM.quantity')">
                                        {{  errors.first('ITEM_FORM.quantity') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="input-7">Price</label>
                                    <input 
                                        v-model="item.price"
                                        name="price"
                                        v-validate="'required'"
                                        type="text" class="form-control" id="input-7" placeholder="Enter Price">
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_FORM.price')">
                                        {{  errors.first('ITEM_FORM.price') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="basic-select">Site</label>

                                    <select 
                                        v-model="item.site"
                                        name="site"
                                        v-validate="'required'"
                                        class="form-control" id="basic-select">
                                        <option style="color:gray">Please Select Site</option>
                                        <option v-for="item in sites" 
                                                :key="item.site_name"
                                                :value="item.id">
                                            {{ item.site_name }}
                                        </option>
                                    </select>
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_FORM.site')">
                                        {{  errors.first('ITEM_FORM.site') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="input-7">DR Number</label>
                                    <input 
                                        v-model="item.dr_number"
                                        name="dr_number"
                                        v-validate="'required'"
                                        data-vv-as="DR number"
                                        type="text" class="form-control" id="input-7" placeholder="Enter DR Number">
                                    <small class="form-text text-danger" v-show="errors.has('ITEM_FORM.dr_number')">
                                        {{  errors.first('ITEM_FORM.dr_number') }}
                                    </small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-inverse-primary" data-dismiss="modal"><i class="fa fa-times"></i>
                        Close</button>
                    <button @click.prevent="handleSubmit('ITEM_FORM')" :disabled="isLoading" type="button" class="btn btn-primary">
                        <span v-if="!isLoading">
                            <i class="fa fa-check-square-o"></i> Save Item
                        </span>
                        <span v-else>Saving item...</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!--End Modal -->
</template>

<script>
    export default {
        data: () => ({
            isLoading: false,
            response: [],
        }),
        computed: {
            item () {
                return this.$store.getters['ITEMS_MODULE/GET_ITEM'];
            },
            units () {
                return this.$store.getters['UNITS_MODULE/GET_UNITS_LIST'];
            },
            sites() {
                return this.$store.getters['SITES_MODULE/GET_SITES_LIST'];
            }
        },
        methods: {
            handleSubmit (form) {
                this.$validator.validateAll(form)
                .then(result => {
                    if(result) {
                        let FORM_TYPE = localStorage.getItem('f_type');
                        let payload = {
                            id: this.item.id,
                            item_name: this.item.item_name,
                            item_code: this.item.item_code,
                            unit: this.item.unit,
                            quantity: this.item.quantity,
                            price: this.item.price,
                            site: this.item.site,
                            dr_number: this.item.dr_number
                        };

                        this.isLoading = true;
                        
                        if(FORM_TYPE == "NEW_ITEM") {
                            this.$store.dispatch('ITEMS_MODULE/STORE_ITEM', payload)
                            .then(response => {
                                this.isLoading = false;
                                this.response = [];
                                this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS');
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
                            });
                        }
                        else if(FORM_TYPE == "EDIT_ITEM") {
                            this.$store.dispatch('ITEMS_MODULE/UPDATE_ITEM', payload)
                            .then(response => {
                                this.isLoading = false;
                                this.response = [];
                                this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS');
                                $("#addmodal").modal('hide');
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
                            });
                        }
                        
                    }
                }); 
            }
        }
    }
</script>

<style>

</style>