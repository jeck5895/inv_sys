<template>
    <div class="py-2 form-inline float-right">
        <div class="form-group">
            <label for="exampleDropdownFormEmail1" class="mr-1">Date From</label>
            <input v-model="date_from" type="date" class="form-control form-control-sm mr-sm-2" id="exampleDropdownFormEmail1">
            <label for="exampleDropdownFormPassword1" class="mr-1">To</label>
            <input v-model="date_to" type="date" class="form-control form-control-sm mr-sm-2" id="exampleDropdownFormPassword1">
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
        computed: {
            date_from: {
                get () {
                    return this.$store.getters['SALES_MODULE/GET_FILTER_FROM'];
                },
                set (newVal) {
                    this.$store.commit('SALES_MODULE/SET_FILTER_FROM', newVal);
                }
            },
            date_to: {
                get () {
                    return this.$store.getters['SALES_MODULE/GET_FILTER_TO'];
                },
                set (newVal) {
                    this.$store.commit('SALES_MODULE/SET_FILTER_TO', newVal);
                }
            },
            keyword () {
                return this.$store.getters['SALES_MODULE/GET_FILTER_KEYWORD'];
            }
        },
        methods: {
            handleFilter () {
                let url = `/api/sales?keyword=${this.keyword}&date_from=${this.date_from}&date_to=${this.date_to}`;

                this.$store.dispatch('SALES_MODULE/FETCH_SALES', url)
            }
        }
    }
</script>

<style>

</style>