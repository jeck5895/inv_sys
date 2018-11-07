<template>
    <div class="card card-default">
        <div class="card-header">
            <h5>Generate Monthly Sales Reports</h5>
        </div>
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <form @submit.prevent="handleGenerateReport">
                        <div class="form-group">
                            <select v-model="month" name="month" id="" class="form-control form-control-sm">
                                <option v-for="(month) in months" :key="month.value" :value="month.value">{{ month.name
                                    }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select v-model="year" name="year" id="" class="form-control form-control-sm">
                                <option v-for="(year) in years" :key="year" :value="year">{{ year }}</option>
                            </select>
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
            year: moment().format('YYYY'),
            month: moment().format('M'),
            months: [
                {
                    name: 'January',
                    value: 1
                },
                {
                    name: 'February',
                    value: 2
                },
                {
                    name: 'March',
                    value: 3
                },
                {
                    name: 'April',
                    value: 4
                },
                {
                    name: 'May',
                    value: 5
                },
                {
                    name: 'June',
                    value: 6
                },
                {
                    name: 'July',
                    value: 7
                },
                {
                    name: 'August',
                    value: 8
                },
                {
                    name: 'September',
                    value: 9
                },
                {
                    name: 'October',
                    value: 10
                },
                {
                    name: 'November',
                    value: 11
                },
                {
                    name: 'December',
                    value: 12
                }
            ]
        }),
        computed: {
            years () {
                let years = [];
                for (let index = moment().format('YYYY'); index >= 2000; index--) {
                    years.push(index);
                }
                return years;
            }
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