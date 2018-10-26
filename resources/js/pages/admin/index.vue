<template>
    <div id="wrapper">
        <Sidebar/>
        <Navbar/>
        <div class="clearfix"></div>
        <div class="content-wrapper">
            <router-view></router-view>
            <!-- asdasd -->
        </div>
    </div>
</template>

<script>
import Sidebar from '../../components/sidebar/index';
import Navbar from '../../components/navbar/index';

export default {
    components: {
        Sidebar,
        Navbar
    }
}
</script>

<style>
    #wrapper {
        width: 100%;
        position: relative;
    }
</style>
