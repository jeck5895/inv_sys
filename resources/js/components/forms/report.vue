<template>
    <form
        data-vv-scope="REPORT_FORM"
        @submit.prevent="handleSubmit('REPORT_FORM')"
    >
        <div class="form-group">
            <label for="">Report Type</label>
            <select
                v-model="type"
                name="report_type"
                id=""
                class="form-control"
            >
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
            </select>
        </div>
        <div class="form-group">
            <label for="branch">Branch</label>
            <select
                v-model="branch"
                name="branch"
                id="branch"
                class="form-control"
                v-validate="'required'"
            >
                <option value="">Select Branch</option>
                <option
                    v-for="branch in branches"
                    :key="branch.id"
                    :value="branch.id"
                >
                    {{ branch.name }}
                </option>
            </select>
            <small
                class="form-text text-danger"
                v-show="errors.has('REPORT_FORM.branch')"
            >
                {{ errors.first("REPORT_FORM.branch") }}
            </small>
        </div>
        <template v-if="type === 'daily'">
            <div class="form-group">
                <label for="">From Day</label>
                <input
                    v-model="date_from"
                    v-validate="'required'"
                    type="date"
                    name="date_from"
                    id=""
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label for="">To Day</label>
                <input
                    v-model="date_to"
                    v-validate="'required'"
                    type="date"
                    name="date_to"
                    id=""
                    class="form-control"
                />
            </div>
        </template>
        <template v-else>
            <div class="form-group">
                <label for="">Month</label>
                <select
                    v-model="month"
                    name="month"
                    id=""
                    class="form-control "
                >
                    <option
                        v-for="month in months"
                        :key="month.value"
                        :value="month.value"
                        >{{ month.name }}</option
                    >
                </select>
            </div>
            <div class="form-group">
                <label for="">Year</label>
                <select v-model="year" name="year" id="" class="form-control ">
                    <option v-for="year in years" :key="year" :value="year">{{
                        year
                    }}</option>
                </select>
            </div>
        </template>
        <div class="form-group">
            <button
                :disabled="isLoading"
                type="submit"
                class="btn btn-success btn-block"
            >
                <span v-if="!isLoading">
                    Generate <i class="fa fa-print"></i>
                </span>
                <span v-else>Generating Report...</span>
            </button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean,
            default: false
        },
        branches: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        type: "monthly",
        branch: "",
        year: moment().format("YYYY"),
        month: moment().format("MM"),
        date_from: moment().format("YYYY-MM-DD"),
        date_to: moment().format("YYYY-MM-DD"),
        months: [
            {
                name: "January",
                value: "01"
            },
            {
                name: "February",
                value: "02"
            },
            {
                name: "March",
                value: "03"
            },
            {
                name: "April",
                value: "04"
            },
            {
                name: "May",
                value: "05"
            },
            {
                name: "June",
                value: "06"
            },
            {
                name: "July",
                value: "07"
            },
            {
                name: "August",
                value: "08"
            },
            {
                name: "September",
                value: "09"
            },
            {
                name: "October",
                value: 10
            },
            {
                name: "November",
                value: 11
            },
            {
                name: "December",
                value: 12
            }
        ]
    }),
    computed: {
        years() {
            let years = [];
            for (let index = moment().format("YYYY"); index >= 2000; index--) {
                years.push(index);
            }
            return years;
        }
    },
    methods: {
        handleSubmit(form) {
            let payload = {
                branch: this.branch,
                type: this.type
            };

            if (this.type === "daily") {
                payload = {
                    ...payload,
                    date_from: this.date_from,
                    date_to: this.date_to
                };
            } else {
                payload = { ...payload, month: this.month, year: this.year };
            }
            this.$validator.validateAll(form).then(valid => {
                if (valid) {
                    this.$emit("on-submit", payload);
                }
            });
        }
    }
};
</script>

<style></style>
