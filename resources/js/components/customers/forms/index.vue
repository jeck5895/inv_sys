<template>
    <div class="card bg-primary">
        <div class="card-body">
            <!-- <div class="card-title text-uppercase text-white">
                <i class="fa fa-address-book-o"></i> New Customer
            </div>
            <hr>
            <br> -->
            <form
                @submit.prevent="handleSubmit('customerForm')"
                data-vv-scope="customerForm"
                class="color-form"
            >
                <div class="form-group">
                    <AlertError :response="response" />
                </div>
                <div class="form-group">
                    <select
                        v-validate="'required'"
                        v-model="customer.customer_type"
                        name="customer_type"
                        data-vv-as="customer type"
                        class="form-control"
                        id="basic-select"
                    >
                        <option value="" style="color:gray"
                            >Please Select Item</option
                        >
                        <option
                            v-for="item in customer_types"
                            :key="item.value"
                            :value="item.value"
                        >
                            {{ item.label }}
                        </option>
                    </select>
                    <small
                        class="form-text text-danger"
                        v-show="errors.has('customerForm.customer_type')"
                    >
                        {{ errors.first("customerForm.customer_type") }}
                    </small>
                </div>
                <div class="form-group ">
                    <label for="input-1">Name</label>
                    <input
                        v-model="customer.fullname"
                        v-validate="'required'"
                        name="name"
                        type="text"
                        class="form-control"
                        id="input-1"
                        placeholder="Enter Customer Name"
                    />
                    <small
                        class="form-text text-danger"
                        v-show="errors.has('customerForm.name')"
                        >{{ errors.first("customerForm.name") }}</small
                    >
                </div>
                <div class="form-group ">
                    <label for="input-1">ID</label>
                    <input
                        v-model="customer.customer_id"
                        v-validate="''"
                        name="customer_id"
                        type="text"
                        class="form-control"
                        id="input-1"
                        placeholder="Enter ID"
                    />
                    <small
                        class="form-text text-danger"
                        v-show="errors.has('customerForm.customer_id')"
                        >{{ errors.first("customerForm.customer_id") }}</small
                    >
                </div>
                <div class="form-group ">
                    <label for="input-1">Course</label>
                    <input
                        v-model="customer.course"
                        v-validate="''"
                        name="course"
                        type="text"
                        class="form-control"
                        id="input-1"
                        placeholder="Enter course"
                    />
                    <small
                        class="form-text text-danger"
                        v-show="errors.has('customerForm.course')"
                        >{{ errors.first("customerForm.course") }}</small
                    >
                </div>
                <div class="form-group ">
                    <label for="input-1">Year</label>
                    <input
                        v-model="customer.year"
                        v-validate="''"
                        name="year"
                        type="text"
                        class="form-control"
                        id="input-1"
                        placeholder="Enter year"
                    />
                    <small
                        class="form-text text-danger"
                        v-show="errors.has('customerForm.year')"
                        >{{ errors.first("customerForm.year") }}</small
                    >
                </div>
                <div class="form-group">
                    <label for="input-35">Department</label>
                    <input
                        v-model="customer.department"
                        name="department"
                        type="text"
                        class="form-control"
                        id="input-35"
                        placeholder="Enter Department"
                    />
                </div>
                <div class="form-group">
                    <button
                        :disabled="isLoading"
                        type="submit"
                        class="btn btn-block bg-white text-primary shadow px-5"
                    >
                        <i class="fa fa-floppy-o"></i>
                        <span v-if="!isLoading">Save</span>
                        <span v-else>
                            <i class="fa fa-spinner fa-spin"></i> Saving...
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import AlertError from "../../../components/alerts/error.vue";

export default {
    data: () => ({
        isLoading: false,
        response: [],
        customer_types: [
            { value: "faculty", label: "Faculty" },
            { value: "student", label: "Student" },
            { value: "others", label: "Others" }
        ]
    }),
    computed: {
        customer() {
            return this.$store.getters["CUSTOMERS_MODULE/GET_CUSTOMER"];
        },
        form_type() {
            return this.$store.getters["FORM_MODULE/GET_FORM_TYPE"];
        }
    },
    methods: {
        handleSubmit(form) {
            this.$validator.validateAll(form).then(result => {
                if (result) {
                    let FORM_TYPE = localStorage.getItem("f_type");
                    let customer = {
                        id: this.customer.id,
                        customer_type: this.customer.customer_type,
                        fullname: this.customer.fullname,
                        customer_id: this.customer.customer_id,
                        course: this.customer.course,
                        year: this.customer.year,
                        department: this.customer.department
                    };

                    this.isLoading = true;

                    if (this.form_type == "NEW_CUSTOMER") {
                        this.$store
                            .dispatch(
                                "CUSTOMERS_MODULE/STORE_CUSTOMER",
                                customer
                            )
                            .then(() => {
                                this.isLoading = false;
                                this.$store.dispatch(
                                    "CUSTOMERS_MODULE/FETCH_CUSTOMERS"
                                );
                            })
                            .catch(errs => {
                                this.isLoading = false;
                                this.response = this.$root.convertError(errs);
                            });
                    } else if (this.form_type == "EDIT_CUSTOMER") {
                        this.$store
                            .dispatch(
                                "CUSTOMERS_MODULE/UPDATE_CUSTOMER",
                                customer
                            )
                            .then(() => {
                                this.isLoading = false;
                                this.response = [];
                                $("#customermodal").modal("hide");
                                this.$store.dispatch(
                                    "CUSTOMERS_MODULE/FETCH_CUSTOMERS"
                                );
                            })
                            .catch(errs => {
                                this.isLoading = false;
                                this.response = this.$root.convertError(errs);
                            });
                    }
                }
            });
        }
    },
    components: {
        AlertError
    }
};
</script>

<style></style>
