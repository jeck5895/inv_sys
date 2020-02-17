<template>
    <div class="modal fade" id="generic-modal">
        <div class="modal-dialog">
            <div class="modal-content border-primary">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white">
                        <slot name="modal-title">
                            Modal Title
                        </slot>
                    </h5>
                    <slot name="modal-tools">
                        <button
                            type="button"
                            class="close text-white"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="modal-body"> </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
