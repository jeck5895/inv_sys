<template>
  <div class="row">
    <div :class="{ 'col-md-9': showForm, 'col-lg-12': !showForm }">
      <div class="card">
        <div class="card-header">
          User Account List

          <div class="card-action">
            <button @click="onAddUser" class="btn btn-sm btn-primary">
              <i class="fa fa-user-plus"></i> Add User
            </button>
          </div>
        </div>
        <div class="card-body table-responsive">
          <users-table :loading="loading" :items="users" :columns="columns">
            <template v-slot:table-td-options="props">
              <div class="btn-group btn-group-sm" role="group">
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
          </users-table>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="col-lg-3">
      <div class="card">
        <div class="card-header">
          User Details

          <div class="card-action">
            <button @click="onClose" class="btn btn-sm btn-danger">
              <i class="fa fa-times-circle"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div v-if="errs !== null" class="form-group">
            <alert :response="errs"></alert>
          </div>
          <user-form
            :action="formAction"
            :model="user"
            :loading="is_saving"
            @on-submit="handleSubmit"
          ></user-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import UsersTable from "../../components/users/table";
import UserForm from "../../components/users/form";
import Alert from "../../components/alerts/error";

export default {
  components: {
    UserForm,
    UsersTable,
    Alert
  },
  data() {
    return {
      showForm: false,
      formAction: null,
      errs: null,
      columns: [
        {
          name: "options",
          label: "Options",
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
          name: "email",
          required: true,
          label: "EMAIL",
          align: "left",
          field: row => row.email,
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
    };
  },
  computed: {
    ...mapGetters("USERS", {
      users: "GET_USERS",
      pagination: "GET_PAGINATION",
      loading: "GET_LOADING_STATE",
      is_saving: "GET_SUBMIT_STATE"
    }),
    user() {
      const user = this.$store.getters["USERS/GET_USER"];

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        account_type: user.account_type
      };
    }
  },
  methods: {
    ...mapActions("USERS", {
      fetchUsers: "FETCH_USERS",
      save: "STORE_USER",
      update: "UPDATE_USER",
      delete: "DELETE_USER"
    }),
    ...mapMutations("USERS", {
      setUser: "SET_USER"
    }),
    handleSubmit(props) {
      const formAction = this.formAction;
      const { model, form, errors } = props;

      let payload = {
        id: model.id,
        name: model.name,
        email: model.email,
        account_type: model.account_type
      };

      switch (formAction) {
        case "ADD":
          payload = {
            ...payload,
            password: model.password,
            password_confirmation: model.confirm_password
          };
          this.save(payload)
            .then(() => {
              this.fetchUsers();
              this.resetForm(model, form, errors);
              this.errs = null;
            })
            .catch(error => {
              this.errs = error.response;
            });
          break;

        case "EDIT":
          this.update(payload)
            .then(() => {
              this.fetchUsers();
              this.errs = null;
              this.resetForm(model, form, errors);
            })
            .catch(error => {
              this.errs = error.response;
            });
          break;

        default:
          break;
      }
    },
    onAddUser() {
      this.formAction = "ADD";
      this.showForm = true;
    },
    onEdit({ item }) {
      this.formAction = "EDIT";
      this.showForm = true;

      this.setUser(item);
    },
    onDelete({ item }) {
      const options = { html: true, loader: true };
      this.$dialog
        .confirm(`Delete <strong>${item.name}</strong> record ?`, options)
        .then(dialog => {
          this.delete(item).then(() => {
            dialog.close();
            this.fetchUsers();
          });
        })
        .catch(() => {});
    },
    onClose() {
      this.showForm = false;
    },
    resetForm(model, form, errors) {
      const keys = Object.keys(model);

      keys.map(key => {
        this.$set(model, key, "");
      });
      //   this.$set(this.item, "model_id", "");
      //   this.$set(this.item, "imei", "");
      //   this.$set(this.item, "color_id", "");
      //   this.$set(this.item, "selling_price", "");
      //   this.$set(this.item, "payment_mode", "");
      //   this.$set(this.item, "freebies", "");
      //   this.$set(this.item, "credit_term", null);

      form.reset();
      errors.clear();
    }
  },
  async mounted() {
    this.fetchUsers();
  }
};
</script>

<style>
</style>
