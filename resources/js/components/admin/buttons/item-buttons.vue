<template>
    <div>
        <button data-toggle="modal" data-target="#dangermodal" class="btn btn-primary waves-effect waves-light m-1">
            <i class="fa fa-cloud-upload"></i> <span>Upload</span> </button>
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
        <!--End Modal -->
        <button type="button" data-toggle="modal" data-target="#addmodal" class="btn btn-primary waves-effect waves-light m-1">
            <i class="fa fa-plus-circle"></i> <span>New Item</span> </button>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>