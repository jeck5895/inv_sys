<template>
    <div class="row">
        <div class="col-lg-12">
            <card>
                <template v-slot:card-header>
                    <h3 class="card-title mb-0 float-left">MANAGE BRANCHES</h3>
                </template>
                <template v-slot:card-body>
                    <div class="row">
                        <div class="col-lg-12 mb-2 ">
                            <div class="clearfix">
                                <div class="float-lg-left d-flex py-2">
                                    <button
                                        @click="onCreate"
                                        class="btn btn-sm btn-primary"
                                    >
                                        ADD BRANCH
                                    </button>
                                </div>
                                <div class="float-lg-right d-flex py-2">
                                    <search-form
                                        :keyword="keyword"
                                        @on-change="onChange"
                                        @on-submit="handleSearch"
                                    ></search-form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 mb-3 table-responsive">
                            <branches-table
                                :loading="loading"
                                :items="branches"
                                :columns="columns"
                            >
                                <template v-slot:table-td-options="props">
                                    <div
                                        class="btn-group btn-group-sm"
                                        role="group"
                                    >
                                        <button
                                            type="button"
                                            title="Edit"
                                            class="btn btn-sm btn-success"
                                            @click="onEdit(props)"
                                        >
                                            <span class="fa fa-edit"></span>
                                        </button>

                                        <button
                                            @click="onDelete(props)"
                                            type="button"
                                            class="btn btn-sm btn-danger"
                                        >
                                            <span class="fa fa-trash"></span>
                                        </button>
                                    </div>
                                </template>
                            </branches-table>
                        </div>
                        <div v-if="branches.length > 0" class="col-lg-12">
                            <pagination
                                :data="pagination"
                                @to-page="toPage"
                                @first-page="firstPage"
                                @prev-page="prevPage"
                                @next-page="nextPage"
                                @last-page="lastPage"
                            />
                        </div>
                    </div>
                </template>
            </card>
            <modal>
                <template v-slot:modal-title>
                    <h5 class="text-white">
                        <span v-if="form_type === 'CREATE'">
                            New Branch
                        </span>
                        <span v-if="form_type === 'EDIT' && branch.name">
                            Edit Branch {{ branch.name }}
                        </span>
                    </h5>
                </template>
                <template v-slot:modal-body>
                    <div v-if="response_errors !== null" class="form-group">
                        <validation-error-component
                            :error-object="response_errors"
                        ></validation-error-component>
                    </div>
                    <Form
                        :item="branch"
                        :loading="saving"
                        @on-submit="onSubmit"
                    />
                </template>
            </modal>
        </div>
    </div>
</template>

<script>
import Card from "../../components/card";
import BranchesTable from "../../components/users/table";
import Pagination from "../../components/Pagination";
import SearchForm from "../../components/filters/search";
import Modal from "../../components/modal";
import Form from "../../components/forms/branch-form";
import ValidationErrorComponent from "../../components/validation-errors";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { store } from "../../store";

export default {
    components: {
        Card,
        BranchesTable,
        Pagination,
        SearchForm,
        Modal,
        Form,
        ValidationErrorComponent
    },
    data: () => ({
        form_type: "",
        submitting: false,
        response_errors: null,
        columns: [
            {
                name: "options",
                label: "OPTIONS",
                sortable: false
            },
            {
                name: "name",
                required: true,
                label: "NAME",
                align: "left",
                field: row => row.name,
                sortable: true
            },
            {
                name: "address",
                required: true,
                label: "ADDRESS",
                align: "left",
                field: row => row.address,
                sortable: true
            },
            {
                name: "created_at",
                required: true,
                label: "DATE CREATED",
                align: "left",
                field: row => row.created_at,
                sortable: true
            },
            {
                name: "updated_at",
                required: true,
                label: "LAST UPDATED",
                align: "left",
                field: row => row.updated_at,
                sortable: true
            }
        ]
    }),
    computed: {
        ...mapGetters("BRANCHES", [
            "branches",
            "loading",
            "pagination",
            "saving"
        ]),
        ...mapGetters("FILTER_MODULE", { keyword: "GET_KEYWORD" }),
        branch() {
            const item = this.$store.getters["BRANCHES/branch"];

            return {
                id: item.id,
                name: item.name,
                address: item.address
            };
        },
        page_size: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_PAGE_SIZE"];
            },
            set(val) {
                this.$store.commit("FILTER_MODULE/SET_PAGE_SIZE", val);
            }
        },
        current_page: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_CURRENT_PAGE"];
            },
            set(val) {
                this.$store.commit("FILTER_MODULE/SET_PAGE_SIZE", val);
            }
        },
        order_by: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_ORDER_BY"];
            },
            set(val) {
                this.$store.commit("FILTER_MODULE/SET_ORDER_BY", val);
            }
        },
        sort_by: {
            get() {
                return this.$store.getters["FILTER_MODULE/GET_SORT_BY"];
            },
            set(val) {
                this.$store.commit("FILTER_MODULE/SET_SORT_BY", val);
            }
        }
    },
    methods: {
        ...mapActions({
            fetchList: "BRANCHES/fetchList",
            store: "BRANCHES/store",
            update: "BRANCHES/update",
            delete: "BRANCHES/delete"
        }),
        ...mapMutations({
            setKeyword: "FILTER_MODULE/SET_KEYWORD",
            clearItem: "BRANCHES/CLEAR_BRANCH",
            setBranch: "BRANCHES/SET_BRANCH"
        }),
        onChange(e) {
            this.setKeyword(e.target.value);
        },
        handleSearch(keyword) {
            const url = `/api/branches?q=${keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchList(url);
        },
        toPage(page) {
            const url = `/api/branches?q=${this.keyword}&page=${page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchList(url);
        },
        firstPage(first_page_url) {
            const url = `${first_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchList(url);
        },
        prevPage(prev_page_url) {
            const url = `${prev_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchList(url);
        },
        nextPage(next_page_url) {
            const url = `${next_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchList(url);
        },
        lastPage(last_page_url) {
            const url = `${last_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchList(url);
        },
        setBreadcrumbs() {
            const breadcrumbs = [
                {
                    text: "Administrator",
                    link: "/administrator"
                },
                {
                    text: "Branches",
                    link: "/administrator/branches"
                }
            ];
            this.$store.commit("setBreadcrumbs", breadcrumbs);
        },
        onCreate() {
            this.form_type = "CREATE";
            this.response_errors = null;
            this.clearItem();
            setTimeout(() => {
                $("#generic-modal").modal("show");
            }, 300);
        },
        onEdit(props) {
            const { item } = props;

            this.form_type = "EDIT";
            this.response_errors = null;
            this.setBranch(item);
            setTimeout(() => {
                $("#generic-modal").modal("show");
            }, 300);
        },
        onDelete(props) {
            const { item } = props;
            let options = { html: true, loader: true };
            //https://github.com/Godofbrowser/vuejs-dialog
            this.$dialog
                .confirm(`<h5>Delete ${item.name} ?</h5>`, options)
                .then(dialog => {
                    this.delete(item.id).then(() => {
                        dialog.close();
                        this.fetchList(
                            `/api/branches?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
                        );
                    });
                })
                .catch(() => {});
        },
        onSubmit(item) {
            let payload = {
                id: item.id,
                name: item.name
            };

            if (item.address !== "") {
                payload = { ...payload, address: item.address };
            }

            this.submitting = true;

            switch (this.form_type) {
                case "CREATE":
                    this.store(payload)
                        .then(response => {
                            this.submitting = false;
                            this.response_errors = null;

                            setTimeout(() => {
                                $("#generic-modal").modal("hide");
                                // this.resetForm(form, errors);
                            }, 300);
                            this.fetchList(
                                `/api/branches?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
                            );
                        })
                        .catch(({ response }) => {
                            this.submitting = false;

                            if (response.status === 422) {
                                this.response_errors = response.data.errors;
                                // toastr.error(response.data.message);
                            }
                        });
                    break;
                case "EDIT":
                    this.update(payload)
                        .then(response => {
                            this.submitting = false;
                            this.response_errors = null;

                            this.fetchList(
                                `/api/branches?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
                            );
                            setTimeout(() => {
                                $("#generic-modal").modal("hide");
                                // this.resetForm(form, errors);
                            }, 300);
                        })
                        .catch(({ response }) => {
                            this.submitting = false;
                            if (response.status === 422) {
                                this.response_errors = response.data.errors;
                                // toastr.error(response.data.message);
                            }
                        });
                    break;
                default:
                    break;
            }
        },
        resetForm(form, errors) {
            form.reset();
            errors.clear();
        }
    },
    async mounted() {
        this.setBreadcrumbs();
        this.setKeyword("");

        await this.fetchList(
            `/api/branches?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
        );
    }
    //   beforeRouteEnter(to, from, next) {
    //     store.commit("FILTER_MODULE/SET_KEYWORD", "");
    //     next();
    //   }
};
</script>
