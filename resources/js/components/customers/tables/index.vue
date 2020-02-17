<template>
    <div class="row">
        <div class="col-md-12 table-responsive">
            <table class="table table-bordered">
                <thead class="thead-primary">
                    <tr>
                        <th>CUSTOMER ID</th>
                        <th>TYPE</th>
                        <th>NAME</th>
                        <th>COURSE</th>
                        <th>YEAR</th>
                        <th>DEPARTMENT</th>
                        <th>DATE CREATED</th>
                        <th>OPTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="isLoading">
                        <td class="text-center" colspan="8">
                            Loading
                            <img
                                src="/images/ajax-loader.gif"
                                alt="Loading...."
                            />
                        </td>
                    </tr>
                    <tr v-if="items.data.length < 1 && !isLoading">
                        <td colspan="8">
                            <p class="mb-0 text-center">
                                <i>No customers has been found</i>
                            </p>
                        </td>
                    </tr>
                    <tr
                        v-else-if="!isLoading"
                        v-for="(customer, i) in items.data"
                        :key="i"
                    >
                        <td style="vertical-align:middle">
                            {{ customer.customer_id }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.customer_type.toUpperCase() }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.fullname }}
                        </td>
                        <td style="vertical-align:middle">
                            {{
                                customer.customer_type == "student"
                                    ? customer.course
                                    : "N/A"
                            }}
                        </td>
                        <td style="vertical-align:middle">
                            {{
                                customer.customer_type == "student"
                                    ? customer.year
                                    : "N/A"
                            }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.department }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ customer.created_at | humanReadableFormat }}
                        </td>
                        <td style="vertical-align: middle;">
                            <div class="btn-group btn-group-sm" role="group">
                                <button
                                    type="button"
                                    title="Edit"
                                    class="btn btn-sm btn-success"
                                    @click="edit(customer)"
                                >
                                    <span class="fa fa-edit"></span>
                                </button>

                                <button
                                    @click="destroy(customer)"
                                    type="button"
                                    class="btn btn-sm btn-danger"
                                >
                                    <span class="fa fa-trash"></span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ["items"],
    computed: {
        isLoading() {
            return this.$store.getters["CUSTOMERS_MODULE/GET_LOADING_STATE"];
        }
    },
    methods: {
        edit(customer) {
            this.$store.commit("FORM_MODULE/SET_FORM_TYPE", "EDIT_CUSTOMER");
            this.$store.commit("CUSTOMERS_MODULE/SET_CUSTOMER", customer);
            $("#customermodal").modal("show");
        },
        destroy(customer) {
            console.log(customer);
            let options = { html: true, loader: true };
            //https://github.com/Godofbrowser/vuejs-dialog
            this.$dialog
                .confirm(
                    `Delete <strong>${customer.fullname}</strong> record ?`,
                    options
                )
                .then(dialog => {
                    this.$store
                        .dispatch("CUSTOMERS_MODULE/DELETE_CUSTOMER", customer)
                        .then(() => {
                            dialog.close();
                            this.$store.dispatch(
                                "CUSTOMERS_MODULE/FETCH_CUSTOMERS",
                                `api/customers?keyword=${this.keyword}&date_from=${this.date_from}&date_to=${this.date_to}`
                            );
                        });
                })
                .catch(() => {});
        }
    }
};
</script>

<style></style>
