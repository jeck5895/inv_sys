<template>
  <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
    <div class="brand-logo">
      <a href="index.html">
        <img src="/images/inv_logo.jpg" class="logo-icon" alt="logo icon" />
        <h5 class="logo-text">Inventory</h5>
      </a>
    </div>
    <div class="user-details">
      <!-- <div
        class="media align-items-center user-pointer collapsed"
        data-toggle="collapse"
        data-target="#user-dropdown"
      > -->
      <div class="media align-items-center collapsed">
        <div class="avatar">
          <img
            class="mr-3 side-user-img"
            src="/images/avatars/user-avatar.png"
            alt="user avatar"
          />
        </div>
        <div class="media-body">
          <h6 class="side-user-name">
            {{ user.name }}
          </h6>
        </div>
      </div>
      <!-- <div id="user-dropdown" class="collapse">
                <ul class="user-setting-menu">
                    <li>
                        <a href="javaScript:void();"
                            ><i class="icon-user"></i> My Profile</a
                        >
                    </li>
                    <li>
                        <a href="javaScript:void();"
                            ><i class="icon-settings"></i> Setting</a
                        >
                    </li>
                    <li>
                        <a href="javaScript:void();"
                            ><i class="icon-power"></i> Logout</a
                        >
                    </li>
                </ul>
            </div> -->
    </div>
    <ul class="sidebar-menu do-nicescrol">
      <li class="sidebar-header">ADMINISTRATIVE PANEL</li>
      <li>
        <router-link to="/administrator/dashboard" class="waves-effect">
          <i class="icon-home"></i><span>Dashboard</span
          ><i class="fa fa-angle-left pull-right"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/administrator/inventory" class="waves-effect">
          <i class="fa fa-cubes"></i><span>Inventory</span>
        </router-link>
      </li>

      <!-- <router-link to="/administrator/sales" class="waves-effect">
          <i class="fa fa-money"></i><span>Sales</span>
        </router-link> -->
      <li>
        <a
          href="#"
          class="media align-items-center user-pointer collapsed"
          data-toggle="collapse"
          data-target="#sales-dropdown"
        >
          <i class="fa fa-money"></i><span>Sales</span
          ><i class="fa fa-angle-left pull-right"></i>
        </a>
        <div id="sales-dropdown" class="collapse">
          <ul class="user-setting-menu">
            <li>
              <router-link to="/administrator/sales/create"
                ><i class="fa fa-long-arrow-right"></i> Add Sales
              </router-link>
            </li>
            <li>
              <router-link to="/administrator/sales/"
                ><i class="fa fa-long-arrow-right"></i> Sales
                Report</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li>
        <router-link to="/administrator/customers" class="waves-effect">
          <i class="icon-people"></i><span>Customers</span>
        </router-link>
      </li>
      <li>
        <router-link to="/administrator/suppliers" class="waves-effect">
          <i class="fa fa-truck"></i><span>Suppliers</span>
        </router-link>
      </li>
      <li>
        <a
          href="#"
          @click="toggleReportClass"
          class="media align-items-center user-pointer collapsed"
          data-toggle="collapse"
          data-target="#report-dropdown"
        >
          <!-- <div class="media-body"> -->
          <i class="fa fa-gears"></i>
          <span>Settings</span>
          <i class="fa fa-angle-left pull-right"></i>
          <!-- </div> -->
        </a>
        <div id="report-dropdown" class="collapse">
          <ul class="user-setting-menu">
            <li>
              <router-link to="/administrator/brands" class="waves-effect"
                ><i class="fa fa-long-arrow-right"></i> Brands
              </router-link>
              <router-link to="/administrator/categories" class="waves-effect"
                ><i class="fa fa-long-arrow-right"></i>
                Categories
              </router-link>
              <router-link to="/administrator/colors" class="waves-effect"
                ><i class="fa fa-long-arrow-right"></i> Colors
              </router-link>
              <router-link to="/administrator/freebies" class="waves-effect"
                ><i class="fa fa-long-arrow-right"></i> Freebies
              </router-link>
              <router-link to="/administrator/models" class="waves-effect"
                ><i class="fa fa-long-arrow-right"></i> Models
              </router-link>
            </li>
          </ul>
        </div>
      </li>
      <!-- <li>
                <a
                    href="#"
                    @click="toggleReportClass"
                    class="media align-items-center user-pointer collapsed"
                    data-toggle="collapse"
                    data-target="#report-dropdown"
                >
                    <div class="media-body">
                        <i class="fa fa-line-chart"></i>
                        <span>Reports</span>
                    </div>
                    <i class="fa fa-angle-left float-right"></i>
                </a>
                <div id="report-dropdown" class="collapse">
                    <ul class="user-setting-menu">
                        <li>
                            <router-link
                                to="/administrator/reports"
                                class="waves-effect"
                                ><i class="fa fa-long-arrow-right"></i> Generate
                                Report</router-link
                            >
                        </li>
                    </ul>
                </div>
            </li> -->
      <li>
        <a
          href="#"
          class="media align-items-center user-pointer collapsed"
          data-toggle="collapse"
          data-target="#users-dropdown"
        >
          <i class="fa fa-users"></i><span>User Accounts</span
          ><i class="fa fa-angle-left pull-right"></i>
        </a>
        <div id="users-dropdown" class="collapse">
          <ul class="user-setting-menu">
            <!-- <li>
              <router-link to="/administrator/users/register"
                ><i class="fa fa-long-arrow-right"></i> Register
              </router-link>
            </li> -->
            <li>
              <router-link to="/administrator/users"
                ><i class="fa fa-long-arrow-right"></i> Account
                List</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="widgets.html" class="waves-effect"
          ><i class="icon-hourglass"></i><span>Audit Trail</span>
        </a>
      </li>
      <li>
        <a @click.prevent="handleLogout" href="#" class="waves-effect"
          ><i class="icon-logout"> </i><span>Logout</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: {
        name: "User"
      }
    }
  },
  methods: {
    toggleReportClass(e) {
      !$("#report-dropdown").hasClass("show")
        ? $("#report-dropdown")
            .prev()
            .addClass("active")
        : $("#report-dropdown")
            .prev()
            .removeClass("active");
    },
    toggleUserClass(e) {
      !$("#account-dropdown").hasClass("show")
        ? console.log(
            $("#account-dropdown")
              .prev()
              .addClass("active")
          )
        : $("#account-dropdown")
            .prev()
            .removeClass("active");
    },
    handleLogout() {
      this.$store.dispatch("AuthModule/LOGOUT");
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
