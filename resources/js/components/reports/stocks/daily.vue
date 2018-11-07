<template>
    <div class="card card-default">
        <div class="card-header">
            <h5>Generate Daily Stock Reports</h5>
        </div>
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <form @submit.prevent="handleGenerateReport">
                        <div class="form-group">
                            <input
                                v-model="date_from"
                                v-validate="'required'"
                                type="date" 
                                name="date_from" 
                                id="" class="form-control">
                        </div>
                        <div class="form-group">
                            <input
                                v-model="date_to"
                                v-validate="'required'"
                                type="date" 
                                name="date_to" 
                                id="" class="form-control">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success btn-block">
                                Generate <i class="fa fa-print"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
           date_from: moment().format('YYYY-MM-DD'),
           date_to: moment().format('YYYY-MM-DD')
        }),
        computed: {
            
        },
        methods: {
            handleGenerateReport () {
                var baseURL = window.location.protocol + "//" + window.location.host;
                window.open(`${baseURL}/sales/report?month=${this.month}&year=${this.year}`, 'Sales Report', 'width=700,heigth=300');
            }
        }
    }
</script>

<style>

</style>