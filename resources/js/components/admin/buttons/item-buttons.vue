<template>
    <div class="row">
        <div class="col-md-6">
            <button data-toggle="modal" data-target="#dangermodal" class="btn btn-primary waves-effect waves-light mr-1">
                <i class="fa fa-cloud-upload"></i> <span>Upload</span> 
            </button>
        
            <button 
                @click="$store.commit('FORM_MODULE/SET_FORM_TYPE', 'NEW_ITEM')" 
                type="button" data-toggle="modal" 
                data-target="#addmodal" 
                class="btn btn-primary waves-effect waves-light mr-1">
                    <i class="fa fa-plus-circle"></i> 
                    <span>New Item</span> 
            </button>

            <button 
                type="button"
                data-toggle="modal"
                data-target="#itemquantitymodal"
                class="btn btn-primary waves-effect waves-light mr-1">
                <i class="fa fa-plus-circle"></i>
                <span>Add Item Quantity</span>
            </button>
        </div>
        
        <div class="col-md-6">
            <div class="form-inline">
                <input
                    v-model="date"
                    type="date" name="daily" id="" style="width:60%;" class="form-control">
                <button @click="handleDailyStockReport" class="btn btn-success ml-2"> 
                    <i class="icon-printer"></i> DAILY REPORT</button>
            </div>
        </div>

        <!-- modal -->
        <div class="modal fade" id="dangermodal">
            <div class="modal-dialog">
                <div class="modal-content border-primary">
                    <div class="modal-header bg-primary">
                        <h5 class="modal-title text-white"><i class="fa fa-file-excel-o"></i> Import
                            File</h5>
                        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" class="dropzone" id="dropzone">
                            <div class="fallback">
                                <input name="file" type="file" multiple="multiple">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-inverse-primary" data-dismiss="modal"><i class="fa fa-times"></i>
                            Close</button>
                        <button type="button" class="btn btn-primary"><i class="fa fa-check-square-o"></i>
                            Upload</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Modal -->
    </div>
</template>

<script>
    export default {
        data: () => ({
            date: moment().format('YYYY-MM-DD')
        }),
        methods: {
            handleDailyStockReport () {
                var baseURL = window.location.protocol + "//" + window.location.host;
                window.open(`${baseURL}/report/items/daily?date=${this.date}`, 'Daily Items Report', 'width=700,heigth=300');
            }
        }
    }
</script>

<style>

</style>