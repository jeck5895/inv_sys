<template>
    <div class="row">
        <div class="col-md-12 mb-3">
            <table id="example" class="table table-bordered">
                <thead class="thead-primary">
                    <tr>
                        <th>UNIT</th>
                        <th>IMEI</th>
                        <th>BRAND</th>
                        <th>COLOR</th>
                        <th>PRICE</th>
                        <th>SPECS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="items.data && items.data.length == 0">
                        <td colspan="9">
                            <p class="text-center">
                                <em>No data to show...</em>
                            </p>
                        </td>
                    </tr>
                    <template v-if="items.data && items.data.length != 0">
                        <tr v-for="(item, i) in items.data" :key="i">
                            <td>{{ item.model.name }}</td>
                            <td>{{ item.imei }}</td>
                            <td>{{ item.brand.name }}</td>
                            <td>{{ item.color.name }}</td>
                            <td>{{ item.selling_price }}</td>
                            <td>{{ item.specs }}</td>
                            <td align="center" class="px-1">
                                <button
                                    @click.prevent="$emit('on-checkout', item)"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#addmodal"
                                    class="btn btn-success btn-sm waves-effect waves-light m-1"
                                >
                                    <i class="fa fa-cart-plus fa-lg"></i>
                                </button>
                                <button
                                    @click.prevent="$emit('on-edit', item)"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#addmodal"
                                    class="btn btn-warning btn-sm waves-effect waves-light m-1"
                                >
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button
                                    @click.prevent="$emit('on-delete', item)"
                                    type="button"
                                    class="btn btn-danger btn-sm waves-effect waves-light"
                                    id="confirm-btn-alert4"
                                >
                                    <i class="fa fa-trash fa-lg"></i>
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            required: true
        }
    }
};
</script>

<style>
.fa {
    font-size: 1rem;
}
</style>
