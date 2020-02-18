<template>
    <form @submit.prevent="handleSearch" class="form-inline float-right">
        <div class="form-group">
            <input
                type="text"
                :value="keyword"
                @input="$emit('on-change', $event.target.value)"
                class="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Search item"
            />
        </div>
        <button type="submit" class="btn btn-success mb-2">
            <i class="fa fa-search"></i>SEARCH
        </button>
    </form>
</template>

<script>
export default {
    props: {
        keyword: {
            required: true,
            type: String
        }
    },
    methods: {
        handleSearch() {
            this.$emit("on-submit", this.keyword);
        }
    }
};
</script>

<style></style>
