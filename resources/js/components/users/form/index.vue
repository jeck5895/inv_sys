<template>
  <form data-vv-scope="userForm" @submit.prevent="onSubmit('userForm')">
    <div class="form-group">
      <label for="">Name</label>
      <input
        name="name"
        v-model="model.name"
        v-validate="'required'"
        type="text"
        class="form-control"
      />
      <small
        class="form-text text-danger"
        v-show="errors.has('userForm.name')"
        >{{ errors.first("userForm.name") }}</small
      >
    </div>
    <div class="form-group">
      <label for="">Email</label>
      <input
        name="email"
        v-model="model.email"
        v-validate="'required|email'"
        type="email"
        class="form-control"
      />
      <small
        class="form-text text-danger"
        v-show="errors.has('userForm.email')"
        >{{ errors.first("userForm.email") }}</small
      >
    </div>
    <div class="form-group">
      <label for="">Account Type</label>
      <select
        v-model="model.account_type"
        v-validate="'required'"
        name="account_type"
        id=""
        class="form-control"
      >
        <option value="1">Super Administrator</option>
        <option value="2">Administrator</option>
      </select>
      <small
        class="form-text text-danger"
        v-show="errors.has('userForm.account_type')"
        >{{ errors.first("userForm.account_type") }}</small
      >
    </div>
    <div v-if="action == 'ADD'" class="form-group">
      <label for="input-7">Password</label>
      <input
        v-model="model.password"
        ref="password"
        v-validate="'required|min:8'"
        name="password"
        type="password"
        class="form-control"
        id="input-7"
        placeholder="Enter Password"
      />
      <small
        class="form-text text-danger"
        v-show="errors.has('userForm.password')"
        >{{ errors.first("userForm.password") }}</small
      >
    </div>
    <div v-if="action == 'ADD'" class="form-group">
      <label for="input-8">Confirm Password</label>
      <input
        v-model="model.confirm_password"
        v-validate="'required|confirmed:password'"
        name="confirm_password"
        type="password"
        class="form-control"
        id="input-8"
        placeholder="Confirm Password"
      />
      <small
        class="form-text text-danger"
        v-show="errors.has('userForm.confirm_password')"
        >{{ errors.first("userForm.confirm_password") }}</small
      >
    </div>

    <div class="form-group">
      <button
        :disabled="loading"
        type="submit"
        class="btn btn-success btn-block"
      >
        <span v-if="loading"> Saving ...</span>
        <span v-else>Save</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "user-form",
  props: {
    model: {
      required: true,
      type: Object
    },
    action: {
      required: true,
      type: String,
      validator: function(value) {
        return ["ADD", "EDIT"].indexOf(value) !== -1;
      }
    },
    loading: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    onSubmit(form) {
      this.$validator.validateAll(form).then(result => {
        if (result) {
          const formData = {
            model: this.model,
            form: this.$validator,
            errors: this.errors
          };
          this.$emit("on-submit", formData);
        }
      });
    }
  }
};
</script>

<style>
</style>
