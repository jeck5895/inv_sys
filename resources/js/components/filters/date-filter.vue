<template>
    <div class="py-2 form-inline">
        <div class="form-group">
            <label for="exampleDropdownFormEmail1" class="mr-1"
                >Date From</label
            >
            <input
                v-model="dateFrom"
                type="date"
                class="form-control form-control-sm mr-sm-2"
                id="exampleDropdownFormEmail1"
            />
            <label for="exampleDropdownFormPassword1" class="mr-1">To</label>
            <input
                v-model="dateFrom"
                type="date"
                class="form-control form-control-sm mr-sm-2"
                id="exampleDropdownFormPassword1"
            />
        </div>
        <div class="form-group">
            <button @click="handleFilter" class="btn btn-sm btn-success">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dateFrom: {
            required: true
        },
        dateTo: {
            required: true
        }
    },
    methods: {
        handleFilter() {
            const payload = {
                date_from,
                date_to
            };
            this.$emit("on-submit", payload);
        }
    }
};
</script>

<style></style>
