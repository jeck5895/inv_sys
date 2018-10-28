<template>
    <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
        <div class="brand-logo">
            <a href="index.html">
                <img src="/images/logo-icon.png" class="logo-icon" alt="logo icon">
                <h5 class="logo-text"> Inventory</h5>
            </a>
        </div>
        <div class="user-details">
            <div class="media align-items-center user-pointer collapsed" data-toggle="collapse" data-target="#user-dropdown">
                <div class="avatar"><img class="mr-3 side-user-img" src="/images/avatars/avatar-4.png" alt="user avatar"></div>
                <div class="media-body">
                    <h6 class="side-user-name">
                        {{ user.name }}
                    </h6>
                </div>
            </div>
            <div id="user-dropdown" class="collapse">
                <ul class="user-setting-menu">
                    <li><a href="javaScript:void();"><i class="icon-user"></i> My Profile</a></li>
                    <li><a href="javaScript:void();"><i class="icon-settings"></i> Setting</a></li>
                    <li><a href="javaScript:void();"><i class="icon-power"></i> Logout</a></li>
                </ul>
            </div>
        </div>
        <ul class="sidebar-menu do-nicescrol">
            <li class="sidebar-header">ADMINISTRATIVE PANEL</li>
            <li>
                <router-link to="/administrator/dashboard" class="waves-effect">
                    <i class="icon-home"></i><span>Dashboard</span><i class="fa fa-angle-left pull-right"></i>
                </router-link>
            </li>
            <li>
                <router-link to="/administrator/stocks" class="waves-effect">
                    <i class="icon-home"></i><span>Stocks</span>
                </router-link>
            </li>
            <li>
                <router-link to="/administrator/issueance">
                    <i class="icon-note"></i><span>Issue</span>
                </router-link>
            </li>
            <li>
                <a href="#" class="collapsed user-pointer" data-toggle="collapse" data-target="#report-dropdown">
                    <i class="icon-home"></i><span>Reports</span>
                </a>
                <div id="report-dropdown" class="collapse">
                    <ul class="user-setting-menu">
                        <li><a href="register.html" ><i class="fa fa-long-arrow-right"></i> Generate Report</a></li>
                        <li><a href="account.html" ><i class="fa fa-long-arrow-right"></i> Sales Table</a></li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        methods: {
            handleAccordion (e) {
                console.log($(e.target))
                // if($(e.target).parent().hasClass('active')) {
                //     $(e.target).parent().removeClass('active');
                //     $(e.target).next().removeClass('menu-open');
                //     $(e.target).next().css('display', 'none');
                // }
                // else {
                //     $(e.target).parent().addClass('active');
                //     $(e.target).next().addClass('menu-open');
                //     $(e.target).next().css('display', 'block');
                // }
            }
        }
    }   
</script>

<style>

</style>