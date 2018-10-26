<template>
    <div class="modal fade" id="addmodal">
        <div class="modal-dialog">
            <div class="modal-content border-primary">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white"><i class="fa fa-plus-square"></i> Add New Item</h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card bg-primary shadow-primary">
                        <div class="card-body">
                            <hr>
                            <form class="color-form">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="input-1">Item Name</label>
                                        <input type="text" class="form-control" id="input-1" placeholder="Enter Item Name">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="input-4">Item Code</label>
                                        <input type="text" class="form-control" id="input-4" placeholder="Enter Item Code">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="basic-select">Unit</label>
                                    <select class="form-control" id="basic-select">
                                        <option style="color:gray">Please Select Unit</option>
                                        <option>PC</option>
                                        <option>PCS</option>
                                        <option>BOX</option>
                                        <option>PACK</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="input-6">Quantity</label>
                                    <input type="number" class="form-control" id="input-6" placeholder="Enter Quantity">
                                </div>
                                <div class="form-group">
                                    <label for="input-7">Price</label>
                                    <input type="text" class="form-control" id="input-7" placeholder="Enter Price">
                                </div>
                                <div class="form-group">
                                    <label for="basic-select">Site</label>

                                    <select class="form-control" id="basic-select">
                                        <option style="color:gray">Please Select Site</option>
                                        <option>Sumacab</option>
                                        <option>General Tinio</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="input-7">DR Number</label>
                                    <input type="text" class="form-control" id="input-7" placeholder="Enter DR Number">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-inverse-primary" data-dismiss="modal"><i class="fa fa-times"></i>
                        Close</button>
                    <button type="button" class="btn btn-primary"><i class="fa fa-check-square-o"></i> Add Item</button>
                </div>
            </div>
        </div>
    </div>
    <!--End Modal -->
</template>

<script>
    export default {

    }
</script>

<style>

</style>