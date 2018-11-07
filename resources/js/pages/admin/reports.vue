<template>
    <div class="container-fluid">
        <div class="row pt-2 pb-2">
            <!-- <div class="col-md-4">
                <div class="form-group">
                    <select v-model="report_type" name="report_type" class="form-control" id="">
                    <option value="sales">Sales</option>
                    <option value="stocks">Stock</option>
                </select>
                </div>
            </div> -->
            <template v-if="report_type == 'sales'">
                <div class="col-md-12">
                    <MonthlySalesForm/>
                </div>
                <div class="col-md-12">
                    <DailySalesForm/>
                </div>
            </template>
            <template v-else-if="report_type == 'stocks'">
                <div class="col-md-12">
                    <DailyStockForm/>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import MonthlySalesForm from '../../components/reports/sales/monthly';
import DailySalesForm from '../../components/reports/sales/daily';
import DailyStockForm from '../../components/reports/stocks/daily'

export default {
    data: () => ({
        report_type: 'sales'
    }),
    components: {
        MonthlySalesForm,
        DailySalesForm,
        DailyStockForm
    }
}
</script>

<style>

</style>
