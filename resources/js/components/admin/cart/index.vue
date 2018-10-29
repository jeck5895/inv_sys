<template>
    <div class="row">
        <div class="col-md-12">
            <h3>Cart Items</h3>
        </div>
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
                                <option v-for="item in items" :key="item.item_name" :value="item.id"> {{ item.item_name }} </option>
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
        <div class="col-md-12 mt-3">
            <table class="table table-sm table-light">
                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th>QTY</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BAG</td>
                        <td>10</td>
                        <td>123.00</td>
                    </tr>
                    <tr>
                        <td>BAG</td>
                        <td>10</td>
                        <td>123.00</td>
                    </tr>
                    <tr>
                        <td>BAG</td>
                        <td>10</td>
                        <td>123.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        items () {
            return this.$store.getters['ITEMS_MODULE/GET_ITEMS_LIST'];
        },
        cart () {
            return this.$store.getters['CART_MODULE/GET_CART_ITEMS'];
        },
        cart_item () {
            return this.$store.getters['CART_MODULE/GET_CART_ITEM'];
        }
    },
    methods: {
        addToCart (form) {
            this.$validator.validateAll(form).then(result => {
                if(result) {
                    let payload = {
                        item_id: this.cart_item.item,
                        quantity: this.cart_item.quantity 
                    }
                    
                }
            });
        }
    }
}
</script>

<style>

</style>
