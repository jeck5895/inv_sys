<template>
    <div class="card bg-primary shadow-primary">
        <div class="card-body">
            <div class="card-title text-uppercase text-white"><i class="fa fa-address-book-o"></i> User
                Registration</div>
            <hr>
            <br>
            <form @submit.prevent="handleSubmit('userRegistrationForm')" data-vv-scope="userRegistrationForm" class="color-form">
                <div class="form-group">
                    <AlertError :response="response"/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="input-1">Full Name</label>
                        <input
                            v-model="user.name"
                            v-validate="'required'"
                            name="name"
                            type="text" 
                            class="form-control" id="input-1" placeholder="Enter Full Name">
                        <small class="form-text text-danger" v-show="errors.has('userRegistrationForm.name')">{{
                            errors.first('userRegistrationForm.name') }}</small>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="input-4">Student ID</label>
                        <input 
                            v-model="user.user_id"
                            v-validate="'required'"
                            name="student_id"
                            type="text" 
                            class="form-control" i
                            d="input-4" placeholder="Student ID">
                        <small class="form-text text-danger" v-show="errors.has('userRegistrationForm.student_id')">{{
                            errors.first('userRegistrationForm.student_id') }}</small>
                    </div>
                </div>
                <div class="form-group">
                    <label for="basic-select">Account Type</label>
                    <select 
                        v-model="user.account_type"
                        v-validate="'required'"
                        name="account_type"
                        class="form-control" id="basic-select">
                            <option style="color:gray">Please Select</option>
                            <option value="1">Admin</option>
                            <option value="2">Student</option>
                    </select>
                    <small class="form-text text-danger" v-show="errors.has('userRegistrationForm.account_type')">{{
                            errors.first('userRegistrationForm.account_type') }}</small>
                </div>
                <div class="form-group">
                    <label for="input-6">Username</label>
                    <input 
                        v-model="user.email"
                        data-vv-as="username"
                        v-validate="'required|email'"
                        name="email"
                        type="email" class="form-control" id="input-6" placeholder="Enter Email Address">
                    <small class="form-text text-danger" v-show="errors.has('userRegistrationForm.email')">{{
                            errors.first('userRegistrationForm.email') }}</small>
                </div>
                <div v-if="form_type == 'NEW_USER'" class="form-group">
                    <label for="input-7">Password</label>
                    <input 
                        v-model="user.password"
                        v-validate="'required|min:8'"
                        name="password"
                        type="password" class="form-control" id="input-7" placeholder="Enter Password">
                    <small class="form-text text-danger" v-show="errors.has('userRegistrationForm.password')">{{
                            errors.first('userRegistrationForm.password') }}</small>
                </div>
                <div v-if="form_type == 'NEW_USER'" class="form-group">
                    <label for="input-8">Confirm Password</label>
                    <input
                        v-model="user.confirm_password"
                        v-validate="'required|confirmed:password'" 
                        name="confirm_password"
                        type="password" 
                        class="form-control" id="input-8" placeholder="Confirm Password">
                    <small class="form-text text-danger" v-show="errors.has('userRegistrationForm.confirm_password')">{{
                            errors.first('userRegistrationForm.confirm_password') }}</small>
                </div>
                <div class="form-group">
                    <button 
                        :disabled="isLoading"
                        type="submit" 
                        class="btn btn-block bg-white text-primary shadow px-5">
                            <i class="fa fa-floppy-o"></i>
                            <span v-if="!isLoading">Save</span>
                            <span v-else>
                                <i class="fa fa-spinner fa-spin"></i> Saving...
                            </span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import AlertError from '../../../components/alerts/error.vue';

    export default {
        data: () => ({
            isLoading: false,
            response: [],
        }),
        computed: {
            user () {
                return this.$store.getters['USERS_MODULE/GET_USER'];
            },
            form_type () {
                return this.$store.getters['FORM_MODULE/GET_FORM_TYPE'];
            }
        },
        methods: {
            handleSubmit (form) {
                this.$validator.validateAll(form).then(result => {
                    if(result) 
                    {
                        let FORM_TYPE = localStorage.getItem('f_type');
                        let user = {
                            id: this.user.id,
                            name: this.user.name,
                            user_id: this.user.user_id,
                            account_type: this.user.account_type,
                            email: this.user.email
                        };

                        this.isLoading = true;
                        
                        if(this.form_type == 'NEW_USER') {
                            user.password = this.user.password;
                            user.password_confirmation = this.user.confirm_password;

                            this.$store.dispatch('USERS_MODULE/STORE_USER', user)
                            .then(() => {
                                this.isLoading = false;
                                this.$store.dispatch('USERS_MODULE/FETCH_USERS');
                            })
                            .catch(errs => {
                                this.isLoading = false;
                                this.response = this.$root.convertError(errs);
                            });
                        }
                        else if(this.form_type == 'EDIT_USER') {
                            this.$store.dispatch('USERS_MODULE/UPDATE_USER', user)
                            .then(() => {
                                this.isLoading = false;
                                this.response = [];
                                $("#usermodal").modal('hide');
                                this.$store.dispatch('USERS_MODULE/FETCH_USERS');
                            })
                            .catch(errs => {
                                this.isLoading = false;
                                this.response = this.$root.convertError(errs);
                            });
                        }   
                    }
                })
            }
        },
        components: {
            AlertError
        }
    }
</script>

<style>

</style>