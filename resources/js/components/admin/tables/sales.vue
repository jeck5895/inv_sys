<template>
    <div class="row justify-content-end">
        <div class="col-md-12">
            <DateFilter/>
            <div class="py-2 form-inline">
                <input v-model="keyword" style="width:250px;" class="form-control form-control-sm mr-2" type="text" placeholder="Search"
                    aria-label="Search">
                <button @click="handleFilter" class="btn btn-success btn-sm my-2 my-sm-0" type="submit">
                    <span class="fa fa-search"></span>&nbsp; Search
                </button>
            </div>
        </div>
        
        <div class="col-md-12 mb-3">
            <table id="default-datatable" class="table table-bordered">
                <thead class="thead-primary shadow-primary">
                    <tr>
                        <th>TRANSACTION NO</th>
                        <th>CUSTOMER</th>
                        <th>TYPE</th>
                        <th>DATE OF TRANSACTION</th>
                        <th>OPTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!sales.data">
                        <td colspan="5" class="text-center">
                            <small class="text-muted">
                                <i>No transactions</i>
                            </small>
                        </td>
                    </tr>
                    <tr v-else-if="sales.data.length === 0">
                        <td colspan="5" class="text-center">
                            <small class="text-muted">
                                <i>No transactions found</i>
                            </small>
                        </td>
                    </tr>
                    <tr v-else v-for="(item, i) in sales.data" :key="i">
                        <td style="vertical-align:middle">
                            {{ item.transaction_no }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ item.fullname }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ item.customer_type }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ item.created_at | humanReadableFormat }}
                        </td>
                        <td>
                            <button @click="handlePrint(item.transaction_no)" class="btn btn-primary btn-sm">
                                PRINT <i class="fa fa-print fa-2x"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>    
            </table>
        </div>
        <div class="col-md-12">
            <Pagination 
                :object="sales" 
                module="SALES_MODULE/FETCH_SALES"
                :query="`keyword=${keyword}&date_from=${date_from}&date_to=${date_to}`"/>
        </div>
    </div>
</template>

<script>
    import Pagination from '../../pagination/index.vue'
    import DateFilter from '../../filters/date-filter.vue'
    export default {
        computed: {
            sales () {
                return this.$store.getters['SALES_MODULE/GET_SALES'];
            },
            keyword: {
                get () {
                    return this.$store.getters['SALES_MODULE/GET_FILTER_KEYWORD'];
                },
                set (newVal) {
                    this.$store.commit('SALES_MODULE/SET_FILTER_KEYWORD', newVal);
                }
            },
            date_from () {
                return this.$store.getters['SALES_MODULE/GET_FILTER_FROM'];
            },
            date_to () {
                return this.$store.getters['SALES_MODULE/GET_FILTER_TO'];
            }
        },
        methods: {
            handleFilter () {
                let url = `/api/sales?keyword=${this.keyword}&date_from=${this.date_from}&date_to=${this.date_to}`;

                this.$store.dispatch('SALES_MODULE/FETCH_SALES', url)
            },
            handlePrint (transaction_no) {
                var baseURL = window.location.protocol + "//" + window.location.host;
                window.open(`${baseURL}/sales/receipt?transaction_no=${transaction_no}`, 'Receipt for ' + transaction_no, 'width=700,heigth=300');
            }
        },
        components: {
            Pagination,
            DateFilter
        }
    }
</script>

<style>

</style>