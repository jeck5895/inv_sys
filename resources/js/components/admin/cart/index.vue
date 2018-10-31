<template>
    <div class="row">
        <div class="col-md-12">
            <form data-vv-scope="CART_FORM" @submit.prevent="addToCart('CART_FORM')">
                <div class="row">
                    <div class="form-group col-md-5">
                        <select
                            v-validate="'required'" 
                            v-model="cart_item.item"
                            name="item"
                            class="form-control" id="basic-select">
                                <option value="" style="color:gray">Please Select Item</option>
                                <option v-for="item in items" :key="item.item_name" :value="item"> 
                                    {{ item.item_name }} (₱ {{ item.price }})
                                </option>
                        </select>
                        <small class="form-text text-danger" v-show="errors.has('CART_FORM.item')">
                            {{  errors.first('CART_FORM.item') }}
                        </small>
                    </div>
                    <div class="form-group col-md-4">
                        <input
                        v-model="cart_item.quantity"
                        v-validate="'required|min_value:1|numeric'"
                        name="quantity"
                        type="number" class="form-control" id="input-37" placeholder="Enter Quantity">
                        <small class="form-text text-danger" v-show="errors.has('CART_FORM.quantity')">
                            {{  errors.first('CART_FORM.quantity') }}
                        </small>
                    </div>
                    <div class="form-group col-md-3">
                        <button type="submit" class="btn btn-success btn-sm">Add to Cart</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-12">
            <h3 class="text-white">Cart Items</h3>
        </div>
        <div class="col-md-12 mt-3 table-responsive">
            <table style="background-color:white" class="table table-sm">
                <thead>
                    <tr>
                        <th>ITEM CODE</th>
                        <th>ITEM</th>
                        <th>QTY</th>
                        <th>PRICE</th>
                        <th>OPTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="cart.length === 0">
                        <td colspan="5">
                            <em><p class="text-muted text-center">No items in cart</p></em>
                        </td>
                    </tr>
                    <tr v-else v-for="(item, i) in cart" :key="i">
                        <td>{{ item.item_code }}</td>
                        <td>{{ item.item_name }}</td>
                        <td>{{ item.request_quantity }}</td>
                        <td>{{ item.total_price }}</td>
                        <td>
                            <span 
                            @click="removeItem(i)"
                            style="cursor:pointer;" class="pa-2 text-danger">Remove</span>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>TOTAL</td>
                        <td>{{ total_amount.toFixed(2) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script>
export default {
    // props: {
    //     cart_item: {
    //         type: Object,
    //         required: true
    //     },
    //     cart: {
    //         type: Array,
    //         required: true
    //     },
    //     items: {
    //         type: Array,
    //         required: true
    //     }
    // },  
    data: () => ({
        total_amount: 0.00
    }),
    computed: {
        cart () {
            return this.$store.getters['CART_MODULE/GET_CART_ITEMS'];
        },
        cart_item () {
            return this.$store.getters['CART_MODULE/GET_CART_ITEM'];
        },
        items () {
            return this.$store.getters['ITEMS_MODULE/GET_ITEMS_LIST'];
        },
    },
    methods: {
        addToCart (form) {
            this.$validator.validateAll(form).then(result => {
                if(result) {
                    let x = false;
                    let selected_item = this.cart_item.item;
                    let total_price = parseInt(selected_item.price) * parseInt(this.cart_item.quantity);
                    let payload = {
                        ...selected_item,
                        request_quantity: this.cart_item.quantity,
                        total_price
                    };

                    for (let index = 0; index < this.cart.length; index++) {
                        if (selected_item.id == this.cart[index].id) {
                            x = index;
                        }
                    }

                    if(this.cart_item.quantity > selected_item.quantity) {
                        toastr.warning(`Stock quantity for ${selected_item.item_name} is insufficient.`);
                    }
                    else{
                        if(x === false) {
                            this.$store.commit('CART_MODULE/SET_CART_ITEMS', payload);
                        }
                        else {
                            this.cart[x].request_quantity = parseInt(this.cart[x].request_quantity) + 1;
                            this.cart[x].total_price = parseInt(this.cart[x].total_price) + (parseInt(this.cart[x].price) * 1);
                            let payload = {
                                item: this.cart[x],
                                index: x
                            };
                            this.$store.commit('CART_MODULE/UPDATE_CART', payload);
                        }
                        this.$store.commit('CART_MODULE/CLEAR_ITEM');
                    }
                }
            });
        },
        removeItem (i) {
            this.$store.commit('CART_MODULE/REMOVE_CART_ITEM', i);
        },
        computeTotalAmount () {
            if(this.cart.length > 0) {
                this.total_amount = 0;
                this.cart.forEach(item => {
                    this.total_amount = parseInt(this.total_amount) + parseInt(item.total_price); 
                });
            }
            else {
                this.total_amount = 0.00;
            }
        }
    },
    watch: {
        cart: {
            handler: function (val, oldVal) {
                console.log('change')
                this.computeTotalAmount();
            },
            deep: true
        }
    },
}
</script>

<style>

</style>
