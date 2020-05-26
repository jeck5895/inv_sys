<template>
    <form
        data-vv-scope="branch-form"
        @submit.prevent="handleSubmit('branch-form')"
    >
        <div class="form-group">
            <label for="">Name</label>
            <input
                style="text-transform: uppercase;"
                v-validate="'required'"
                name="name"
                v-model="item.name"
                type="text"
                class="form-control"
            />
            <small
                class="form-text text-danger"
                v-show="errors.has('branch-form.name')"
            >
                {{ errors.first("branch-form.name") }}
            </small>
        </div>
        <div class="form-group">
            <label for="">Address</label>
            <input
                name="address"
                v-model="item.address"
                type="text"
                class="form-control"
                placeholder="(Field is optional)"
            />
        </div>
        <div class="form-group">
            <button :disabled="loading" class="btn btn-sm btn-success">
                <span v-if="loading">Saving...</span>
                <span v-if="!loading">Save</span>
            </button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        item: {
            required: true,
            type: Object
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleSubmit(form) {
            // const payload = {
            //     form: this.$validator,
            //     errors: this.errors,
            //     item: this.item
            // };
            this.$validator.validateAll(form).then(valid => {
                if (valid) {
                    this.$emit("on-submit", this.item);
                }
            });
        }
    },
    watch: {
        item: function() {
            this.$validator.reset();
            this.errors.clear();
        }
    }
};
</script>
