<template>
    <div class="container-fluid">
        <!-- Breadcrumb -->
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
        <!-- End Breadcrumb -->
        <!-- Table -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header"><i class="fa fa-clone"></i> My Inventory</div>

                    <div class="card-body table-responsive">
                        <div class="row">
                            <div class="col-lg-12 mx-auto">
                                <div class="card bg-primary shadow-primary">
                                    <div class="card-body">
                                        <div class="card-title text-uppercase text-white"><i class="	fa fa-share-square-o"></i>
                                            Supplies Issuance</div>
                                        <hr>
                                        <!-- Issuance Form -->
                                        <div class="row">
                                            <div class="col-md-5">
                                                <IssuanceForm/>
                                            </div>
                                            <div class="col-md-7">
                                                <IssuanceCart/>
                                            </div>
                                        </div>
                                        <!-- End Issuance Form -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Issuance Table -->
                        <IssuanceTable :items="stocks"/>
                        <!-- End Issuance Table -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import IssuanceForm from '../../components/form-modal/issuance.vue';
    import IssuanceTable from '../../components/admin/tables/items.vue';
    import IssuanceCart from '../../components/admin/cart/index.vue'

    export default {
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS_LIST');//items for select box
                vm.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS'); //items data table
            })
        },
        components: {
            IssuanceForm,
            IssuanceTable,
            IssuanceCart
        },
        computed: {
            stocks () {
                return this.$store.getters['ITEMS_MODULE/GET_ITEMS'];
            }
        }
    }
</script>

<style>

</style>
