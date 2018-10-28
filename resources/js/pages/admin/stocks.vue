<template>
    <div class="container-fluid">
        <div class="row pt-2 pb-2">
            <div class="col-sm-9">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javaScript:void();">Home</a></li>
                    <li class="breadcrumb-item"><a href="javaScript:void();">User Account</a></li>
                    <li class="breadcrumb-item"><a href="javaScript:void();">Register</a></li>
                </ol>
            </div>
            <div class="col-sm-3">
                <div class="btn-group float-sm-right">
                    <button type="button" class="btn btn-outline-primary waves-effect waves-light"><i class="fa fa-cog mr-1"></i>
                        Setting</button>
                    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split waves-effect waves-light"
                        data-toggle="dropdown">
                        <span class="caret"></span>
                    </button>
                    <div class="dropdown-menu">
                        <a href="javaScript:void();" class="dropdown-item">Action</a>
                        <a href="javaScript:void();" class="dropdown-item">Another action</a>
                        <a href="javaScript:void();" class="dropdown-item">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a href="javaScript:void();" class="dropdown-item">Separated link</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header"><i class="fa fa-clone"></i> My Stocks</div>
                    <div class="card-body table-responsive">
                        <!-- Buttons -->
                        <NavButtons/>
                        <!-- End Buttons -->
                        <hr>
                        <!-- Table -->
                        <ItemsTable :items="stocks"/>
                        <!-- End Table -->
                        
                        <!-- Item Form Modal -->
                        <ItemForm/>
                        <!-- End Item Form Modal -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavButtons from '../../components/admin/buttons/item-buttons.vue'
    import ItemsTable from '../../components/admin/tables/items.vue'
    import ItemForm from '../../components/form-modal/item.vue'
    import { store } from '../../store/index.js';

    export default {
        beforeRouteEnter(to, from, next) {
            store.dispatch('ITEMS_MODULE/FETCH_ITEMS')
            .then(() => {
                store.dispatch('UNITS_MODULE/FETCH_UNITS_LIST')
                store.dispatch('SITES_MODULE/FETCH_SITES_LIST')
                next();
            }); //items data table
                        
        },
        computed: {
            stocks () {
                return this.$store.getters['ITEMS_MODULE/GET_ITEMS'];
            }
        },
        components:{
            NavButtons,
            ItemsTable,
            ItemForm
        }
    }
</script>

<style>

</style>