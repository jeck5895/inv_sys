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
    props: ["errors"],
    computed: {
        validationErrors() {
            let errors = Object.values(this.errors);
            errors = errors.flat();
            return errors;
        }
    }
};
</script>
