<template>
    <div class="modal fade" id="usermodal">
        <div class="modal-dialog">
            <div class="modal-content border-primary">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white"><i class="fa fa-plus-square"></i>User Details</h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <RegistrationForm/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RegistrationForm from '../users/form/register'
export default {
    components: {
        RegistrationForm
    }
}
</script>

<style>

</style>
