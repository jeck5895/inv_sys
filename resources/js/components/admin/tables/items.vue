<template>
    <div class="row">
        <div class="col-md-12 mb-3">
            <table id="example" class="table table-bordered">
                <thead class="thead-primary shadow-primary">
                    <tr>
                        <th>Item Name</th>
                        <th>Item Code</th>
                        <th>Unit</th>

                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Site</th>
                        <th>Date Added</th>
                        <th>DR Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="items.data.length == 0">
                        <td colspan="9">
                            <p class="text-center">
                                <em>No data to show...</em>
                            </p>
                        </td>
                    </tr>
                    <tr v-if="items.data.length != 0" v-for="(item, i) in items.data" :key="i">
                        <td>{{ item.item_name }}</td>
                        <td>{{ item.item_code }}</td>
                        <td>{{ item.unit.unit_name }}</td>

                        <td>{{ item.remaining_quantity }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.site.site_name }}</td>
                        <td>{{ item.create_at|humanReadableFormat}}</td>
                        <td>{{ item.dr_number }}</td>
                        <td align="center">
                            <button @click="handleEdit(item)" type="button" data-toggle="modal" data-target="#addmodal" class="btn btn-primary waves-effect waves-light m-1">
                                <i class="fa fa-plus-circle"></i> <span>UPDATE</span> 
                            </button>
                            <button @click="handleRemove(item)" type="button" class="btn btn-primary waves-effect waves-light" id="confirm-btn-alert4">REMOVE
                            </button>

                        </td>
                    </tr>
                </tbody>
                <!-- <tfoot>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Code</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Site</th>
                        <th>Date Added</th>
                        <th>DR Number</th>
                        <th>Action</th>
                    </tr>
                </tfoot> -->
            </table>
        </div>  
        <div class="col-md-12 justify-content-right">
            <Pagination 
                :object="items"
                module="ITEMS_MODULE/FETCH_ITEMS"/>    
        </div>            
    </div>
</template>

<script>
    import Pagination from '../../pagination/index.vue';

    export default {
        props: {
            items: {
                required: true
            }
        },
        methods: {
            handleEdit (item) {
                let payload = {
                    id: item.id,
                    item_code: item.item_code,
                    item_name: item.item_name,
                    price: item.price,
                    quantity: item.quantity,
                    unit: item.unit.id,
                    site: item.site.id,
                    dr_number: item.dr_number
                };
                this.$store.commit('FORM_MODULE/SET_FORM_TYPE', 'EDIT_ITEM');
                this.$store.commit('ITEMS_MODULE/SET_ITEM', payload);
            },
            handleRemove (item) {
                let bool = confirm(`Delete ${item.item_name} ?`);

                if(bool) {
                    this.$store.dispatch('ITEMS_MODULE/DELETE_ITEM', item.id);
                }
            }
        },
        components: {
            Pagination
        }
    }
</script>

<style>

</style>