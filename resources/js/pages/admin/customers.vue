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
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header"><i class="fa fa-users"></i> Customers</div>

                    <div class="card-body table-responsive">
                        <div class="row">
                            <div class="col-lg-12 mx-auto">
                                <CustomersTable/>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomerFormModal/>
            </div>
        </div>
    </div>
</template>

<script>
import CustomerFormModal from '../../components/form-modal/customer'
import CustomersTable from '../../components/customers/tables/index'
import { store } from '../../store/index.js'

export default {
    beforeRouteEnter(to, from, next) {
        // next(vm => {
        //    vm.$store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS');
        // })
        store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS')
        .then(() => {
            next();
        });
    },
    components: {
        CustomerFormModal,
        CustomersTable
    }
}
</script>

<style>

</style>
