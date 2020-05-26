<template>
    <div class="row">
        <div class="col-lg-12">
            <card>
                <template v-slot:card-header>
                    <h3 class="card-title mb-0">Audit Logs</h3>
                </template>
                <template v-slot:card-body>
                    <div class="table-responsive">
                        <audit-table
                            :loading="loading"
                            :items="logs"
                            :columns="columns"
                        ></audit-table>
                        <br />
                        <pagination
                            v-if="logs.length > 0"
                            :data="pagination"
                            @to-page="toPage"
                            @first-page="firstPage"
                            @prev-page="prevPage"
                            @next-page="nextPage"
                            @last-page="lastPage"
                        />
                    </div>
                </template>
            </card>
        </div>
    </div>
</template>

<script>
import Card from "../../../components/card";
import { setBreadcrumbs } from "../../../utils/helpers";
import AuditTable from "../../../components/users/table/index";
import Pagination from "../../../components/Pagination";
import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        Card,
        AuditTable,
        Pagination
    },
    computed: {
        ...mapGetters("AUDIT", ["logs", "loading", "pagination"]),
        ...mapGetters("FILTER_MODULE", { keyword: "GET_KEYWORD" }),
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
    data() {
        return {
            columns: [
                {
                    name: "auditable_type",
                    required: true,
                    label: "Entity",
                    align: "left",
                    field: row => row.auditable_type,
                    sortable: true
                },
                {
                    name: "event",
                    required: true,
                    label: "Event",
                    align: "left",
                    field: row => row.event,
                    sortable: true
                },
                {
                    name: "old_values",
                    required: true,
                    label: "Old Values",
                    align: "left",
                    field: row => row.old_values,
                    sortable: true
                },
                {
                    name: "new_values",
                    required: true,
                    label: "New Values",
                    align: "left",
                    field: row => row.new_values,
                    sortable: true
                },
                {
                    name: "user",
                    required: true,
                    label: "User",
                    align: "left",
                    field: row => row.user.name,
                    sortable: true
                },
                {
                    name: "ip_address",
                    required: true,
                    label: "IP",
                    align: "left",
                    field: row => row.ip_address,
                    sortable: true
                },
                {
                    name: "created_at",
                    required: true,
                    label: "DATE CREATED",
                    align: "left",
                    field: row => row.created_at,
                    sortable: true
                }
            ]
        };
    },
    methods: {
        ...mapActions("AUDIT", {
            fetch: "fetch"
        }),
        toPage(page) {
            const url = `/api/audits?q=${this.keyword}&page=${page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetch(url);
        },
        firstPage(first_page_url) {
            const url = `${first_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetch(url);
        },
        prevPage(prev_page_url) {
            const url = `${prev_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetch(url);
        },
        nextPage(next_page_url) {
            const url = `${next_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetch(url);
        },
        lastPage(last_page_url) {
            const url = `${last_page_url}&q=${this.keyword}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`;
            this.fetch(url);
        }
    },
    mounted() {
        const breadcrumbs = [
            {
                text: "Administrator",
                link: "/administrator"
            },
            {
                text: "Audits",
                link: "/administrator/audit-logs"
            },
            {
                text: "Main",
                link: "/administrator/audit-logs/"
            }
        ];
        setBreadcrumbs(breadcrumbs);
    },
    async created() {
        await this.fetch(
            `/api/audits?q=${this.keyword}&page=${this.current_page}&per_page=${this.page_size}&order_by=${this.order_by}&sort_by=${this.sort_by}`
        );
    }
};
</script>

<style></style>
