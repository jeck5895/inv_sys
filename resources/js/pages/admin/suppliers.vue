<template>
    <div class="row">
        <div class="col-lg-12">
            <card>
                <template v-slot:card-header>
                    <h3 class="card-title mb-0 float-left">SUPPLIERS</h3>
                </template>
            </card>
        </div>
    </div>
</template>

<script>
import Card from "../../components/card";
export default {
    components: {
        Card
    },
    methods: {
        setBreadcrumbs() {
            const breadcrumbs = [
                {
                    text: "Administrator",
                    link: "/administrator"
                },
                {
                    text: "Suppliers",
                    link: "/administrator/suppliers"
                }
            ];
            this.$store.commit("setBreadcrumbs", breadcrumbs);
        }
    },
    created() {
        this.setBreadcrumbs();
    }
};
</script>

<style></style>
