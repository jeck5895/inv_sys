<template>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <button @click="$store.commit('FORM_MODULE/SET_FORM_TYPE', 'NEW_CUSTOMER')" data-toggle="modal" data-target="#customermodal" class="btn btn-success">
                        <i class="fa fa-user-plus"></i>
                        ADD CUSTOMER
                    </button>
                </div>
                <div class="col-md-6">
                    <form @submit.prevent="handleSearch" class="form-inline float-right">
                        <input type="text" 
                            v-model="keyword"
                            class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Search students">
                        <button type="submit" class="btn btn-success mb-2"><i class="fa fa-search"></i>SEARCH</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-12 table-responsive">
            <table class="table table-bordered">
                <thead class="thead-primary shadow-primary">
                    <tr>
                        <th>CUSTOMER ID</th>
                        <th>TYPE</th>
                        <th>NAME</th>
                        <th>COURSE</th>
                        <th>YEAR</th>
                        <th>DEPARTMENT</th>
                        <th>DATE CREATED</th>
                        <th>OPTIONS</th>
                    </tr>
                </thead>
                <tbody>
                     <tr v-if="isLoading">
                        <td class="text-center" colspan="8">
                           Loading <img src="/images/ajax-loader.gif" alt="Loading....">
                        </td>
                    </tr>
                    <tr v-if="customers.data.length < 1 && !isLoading">
                        <td colspan="8">
                            <p class="mb-0 text-center">
                                <i>No customers has been found</i>
                            </p>
                        </td>
                    </tr>
                    <tr v-else-if="!isLoading" v-for="(customer, i) in customers.data" :key="i">
                        <td style="vertical-align:middle">
                            {{ customer.customer_id }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.customer_type.toUpperCase() }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.fullname }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.customer_type == 'student' ? customer.course : 'N/A' }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.customer_type == 'student' ? customer.year : 'N/A' }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.department }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.created_at | humanReadableFormat }}
                        </td>
                        <td style="vertical-align: middle;">
                            <div class="btn-group btn-group-sm" role="group">
                                <button type="button" title="Edit" class="btn btn-sm btn-success" @click="edit(customer)">
                                    <span class="fa fa-edit"></span>
                                </button>

                                <button @click="destroy(customer)" type="button" class="btn btn-sm btn-danger">
                                    <span class="fa fa-trash"></span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-12 justify-content-right">
            <Pagination
                :object="customers" 
                module="CUSTOMERS_MODULE/FETCH_CUSTOMERS"
                :query="`keyword=${keyword}&date_from=${date_from}&date_to=${date_to}`"/>
        </div>
    </div>
</template>

<script>
import Pagination from '../../../components/pagination/index';

export default {
    computed: {
        isLoading () {
            return this.$store.getters['CUSTOMERS_MODULE/GET_LOADING_STATE'];
        },
        customers () {
            return this.$store.getters['CUSTOMERS_MODULE/GET_CUSTOMERS'];
        },
        keyword: {
            get () {
                return this.$store.getters['FILTER_MODULE/GET_KEYWORD'];
            },
            set (newVal, oldVal) {
                this.$store.commit('FILTER_MODULE/SET_KEYWORD', newVal);
            }
        },
        date_from () {
            return this.$store.getters['FILTER_MODULE/GET_DATE_FROM'];
        },
        date_to () {
            return this.$store.getters['FILTER_MODULE/GET_DATE_TO'];
        }
    },
    methods: {
        edit (customer) {
            this.$store.commit('FORM_MODULE/SET_FORM_TYPE', 'EDIT_CUSTOMER')
            this.$store.commit('CUSTOMERS_MODULE/SET_CUSTOMER', customer);
            $('#customermodal').modal('show');
        },
        destroy (customer) {
            console.log(customer)
            let options = { html:true, loader: true };
            //https://github.com/Godofbrowser/vuejs-dialog
            this.$dialog
            .confirm(`Delete <strong>${customer.fullname}</strong> record ?`, options)
            .then(dialog => {
                this.$store.dispatch('CUSTOMERS_MODULE/DELETE_CUSTOMER', customer)
                .then(() => {
                    dialog.close();
                    this.$store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS',`api/customers?keyword=${this.keyword}&date_from=${this.date_from}&date_to=${this.date_to}`)
                })
            })
            .catch(() => {

            })
        },
        handleSearch () {
            let url = `/api/customers?keyword=${this.keyword}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.$store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS', url);
        }
    },
    components: {
        Pagination
    }
}
</script>

<style>

</style>
