<template>
  <div style="height: 100vh; display: table; width:100%" class="container">
    <div style="display: table-cell; width:100%; vertical-align: middle;">
      <div
        class="card card-authentication1 mx-auto my-5 bg-dark animated zoomIn"
      >
        <div class="card-body">
          <div class="card-content p-2">
            <div style="width: 50px; margin:auto;" class="text-center">
              <img class="img-fluid" src="/images/inv_logo.jpg" />
            </div>
            <div class="card-title text-uppercase text-center py-2 text-white">
              Sign In
            </div>
            <div
              v-if="response != null && response.status == 401"
              class="alert alert-danger alert-dismissible"
              role="alert"
            >
              <button type="button" class="close" data-dismiss="alert">
                &times;
              </button>
              <div class="alert-icon">
                <i class="icon-close"></i>
              </div>
              <div class="alert-message">
                <span
                  ><strong>{{ response.data.message }}</strong></span
                >
              </div>
            </div>
            <form
              @submit.prevent="handleLogin('loginForm')"
              class="color-form"
              data-vv-scope="loginForm"
            >
              <div class="form-group">
                <div class="position-relative has-icon-left">
                  <label for="exampleInputUsername" class="sr-only"
                    >Username</label
                  >
                  <input
                    data-vv-as="Email"
                    v-validate="'required|email'"
                    v-model="email"
                    name="email"
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Username"
                  />
                  <div class="form-control-position">
                    <i class="icon-user"></i>
                  </div>
                </div>
                <small
                  class="form-text text-danger"
                  v-if="
                    fields.$loginForm &&
                      fields.$loginForm.email.touched &&
                      errors.has('loginForm.email')
                  "
                  >{{ errors.first("loginForm.email") }}</small
                >
              </div>
              <div class="form-group">
                <div class="position-relative has-icon-left">
                  <label for="exampleInputPassword" class="sr-only"
                    >Password</label
                  >
                  <input
                    data-vv-as="Password"
                    v-validate="'required'"
                    v-model="password"
                    name="password"
                    type="password"
                    id="exampleInputPassword"
                    class="form-control"
                    placeholder="Password"
                  />
                  <div class="form-control-position">
                    <i class="icon-lock"></i>
                  </div>
                </div>
                <small
                  class="form-text text-danger"
                  v-show="errors.has('loginForm.password')"
                  >{{ errors.first("loginForm.password") }}</small
                >
              </div>
              <div class="form-row mr-0 ml-0">
                <div class="form-group col-6">
                  <!-- <div class="demo-checkbox">
                                <input type="checkbox" id="user-checkbox" class="filled-in chk-col-danger" checked="" />
                                <label for="user-checkbox">Remember me</label>
                            </div> -->
                </div>
                <!-- <div class="form-group col-6 text-right">
                  <a href="authentication-dark-reset-password.html"
                    >Reset Password</a
                  >
                </div> -->
              </div>

              <div class="form-group">
                <button
                  :disabled="isLoading"
                  type="submit"
                  class="btn btn-danger btn-block waves-effect waves-light"
                >
                  <span v-if="!isLoading">
                    Sign In
                  </span>
                  <span v-else>
                    Signing in...
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    isLoading: false,
    response: null
  }),
  methods: {
    handleLogin(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          let payload = {
            grant_type: "password",
            client_id: process.env.MIX_PASSPORT_CLIENT_ID,
            client_secret: process.env.MIX_PASSPORT_CLIENT_SECRET,
            username: this.email,
            password: this.password,
            scope: ""
          };
          this.isLoading = true;
          this.$store
            .dispatch("AuthModule/LOGIN", payload)
            .then(response => {
              this.fetchUser();
              this.response = null;
            })
            .catch(error => {
              console.log(error.response);
              this.isLoading = false;
              this.response = error.response;
            });
        }
      });
    },
    fetchUser() {
      this.$store.dispatch("AuthModule/FETCH_USER").then(response => {
        // setTimeout(() => {
        this.isLoading = false;
        // this.$router.push({ name: "inventory" });
        // this.$router.push('/administrator/stocks');
        window.location =
          window.location.protocol +
          "//" +
          window.location.host +
          "/administrator/inventory/";
        // }, 1000);
      });
    }
  },
  mounted() {
    console.log(this.fields.$loginForm);
  }
};
</script>

<style></style>
