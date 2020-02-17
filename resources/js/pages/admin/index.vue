<template>
    <div id="wrapper">
        <Sidebar :user="user" />
        <Navbar :user="user" />
        <div class="clearfix"></div>
        <div class="content-wrapper">
            <div class="container-fluid">
                <!-- Breadcrumb -->
                <div class="row pt-2 pb-2">
                    <div class="col-sm-9">
                        <Breadcrumb :items="breadcrumbs" />
                    </div>
                    <div class="col-sm-3">
                        <HeaderTools />
                    </div>
                </div>
                <!-- End Breadcrumb -->
                <router-view></router-view>
                <!-- asdasd -->
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../../components/sidebar/index";
import Navbar from "../../components/navbar/index";
import Breadcrumb from "../../components/breadcrumb";
import HeaderTools from "../../components/header-tools";

export default {
    computed: {
        user() {
            return this.$store.getters["AuthModule/GET_USER"];
        },
        breadcrumbs() {
            return this.$store.state.breadcrumbs;
        }
    },
    components: {
        Sidebar,
        Navbar,
        Breadcrumb,
        HeaderTools
    }
    // data: () => ({
    //     breadcrumbs: [

    //     ]
    // }),
};
</script>

<style>
#wrapper {
    width: 100%;
    position: relative;
}
</style>
