<template>
    <div class="row">
        <div class="col-lg-12">
            <card>
                <template v-slot:card-header>
                    <h3 class="card-title mb-0 float-left">
                        MANAGE COLORS
                    </h3>
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
                                        ADD COLOR
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
                            <suppliers-table
                                :items="colors"
                                :is-loading="is_loading"
                                @on-edit="onEdit"
                                @on-delete="onDelete"
                            ></suppliers-table>
                        </div>
                        <div class="col-lg-12">
                            <Pagination
                                :data="colors"
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
                            New Color
                        </span>
                        <span v-if="form_type === 'EDIT' && color.name">
                            Edit Color {{ color.name }}
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
                        :item="color"
                        :loading="submitting"
                        @on-submit="onSubmit"
                    />
                </template>
            </modal>
        </div>
    </div>
</template>

<script>
import Card from "../../components/card";
import SuppliersTable from "../../components/admin/tables/suppliers-table";
import Pagination from "../../components/Pagination";
import SearchForm from "../../components/filters/search";
import Modal from "../../components/modal";
import Form from "../../components/forms/settings-form";
import ValidationErrorComponent from "../../components/validation-errors";

import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: {
        Card,
        SuppliersTable,
        Pagination,
        SearchForm,
        Modal,
        Form,
        ValidationErrorComponent
    },
    data: () => ({
        form_type: "",
        submitting: false,
        response_errors: null
    }),
    computed: {
        ...mapGetters({
            colors: "COLORS/GET_COLORS",
            is_loading: "FILTER_MODULE/GET_LOADING",
            keyword: "FILTER_MODULE/GET_KEYWORD"
        }),
        color() {
            const item = this.$store.getters["COLORS/GET_COLOR"];

            return {
                id: item.id,
                name: item.name
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
            fetchItems: "COLORS/fetchColors",
            store: "COLORS/store",
            update: "COLORS/update",
            delete: "COLORS/delete"
        }),
        ...mapMutations({
            setKeyword: "FILTER_MODULE/SET_KEYWORD",
            clearItem: "COLORS/CLEAR_COLOR",
            setItem: "COLORS/SET_COLOR"
        }),
        onChange(e) {
            this.setKeyword(e.target.value);
        },
        handleSearch(keyword) {
            const url = `/api/colors?q=${keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchItems(url);
        },
        toPage(page) {
            const url = `/api/colors?q=${this.keyword}&page=${page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchItems(url);
        },
        firstPage(first_page_url) {
            const url = `${first_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchItems(url);
        },
        prevPage(prev_page_url) {
            const url = `${prev_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchItems(url);
        },
        nextPage(next_page_url) {
            const url = `${next_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchItems(url);
        },
        lastPage(last_page_url) {
            const url = `${last_page_url}?q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetchItems(url);
        },
        setBreadcrumbs() {
            const breadcrumbs = [
                {
                    text: "Administrator",
                    link: "/administrator"
                },
                {
                    text: "Colors",
                    link: "/administrator/colors"
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
        onEdit(item) {
            this.form_type = "EDIT";
            this.response_errors = null;
            this.setItem(item);
            setTimeout(() => {
                $("#generic-modal").modal("show");
            }, 300);
        },
        onDelete(item) {
            let options = { html: true, loader: true };
            //https://github.com/Godofbrowser/vuejs-dialog
            this.$dialog
                .confirm(`<h5>Delete ${item.name} ?</h5>`, options)
                .then(dialog => {
                    this.delete(item.id).then(() => {
                        dialog.close();
                        this.fetchItems(
                            `/api/colors?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
                        );
                    });
                })
                .catch(() => {});
        },
        onSubmit(item) {
            const payload = {
                id: item.id,
                name: item.name
            };

            this.submitting = true;

            switch (this.form_type) {
                case "CREATE":
                    this.store(payload)
                        .then(response => {
                            this.submitting = false;
                            this.response_errors = null;
                            toastr.success("Saved");

                            setTimeout(() => {
                                $("#generic-modal").modal("hide");
                                // this.resetForm(form, errors);
                            }, 300);
                            this.fetchItems(
                                `/api/colors?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
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
                            toastr.success("Changes saved.");

                            this.fetchItems(
                                `/api/colors?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
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
    async created() {
        this.setBreadcrumbs();

        await this.fetchItems(
            `/api/colors?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
        );
    }
};
</script>

<style></style>
