<template>
    <div v-if="validationErrors">
        <div class="alert alert-danger" role="alert">
            <ul class="py-2">
                <li v-for="(value, key) in validationErrors" :key="key">
                    {{ value }}
                </li>
            </ul>

            <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ["errorObject"],
    computed: {
        validationErrors() {
            let errors_obj = Object.values(this.errorObject);
            errors_obj = errors_obj.flat();
            return errors_obj;
        }
    }
};
</script>
