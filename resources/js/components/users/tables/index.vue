<template>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <button @click="$store.commit('FORM_MODULE/SET_FORM_TYPE', 'NEW_USER')" data-toggle="modal" data-target="#usermodal" class="btn btn-success">
                        <i class="fa fa-user-plus"></i>
                        ADD USER
                    </button>
                </div>
                <div class="col-md-6">
                    <form @submit.prevent="handleSearch" class="form-inline float-right">
                        <input type="text" 
                            v-model="keyword"
                            class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Search users">
                        <button type="submit" class="btn btn-success mb-2"><i class="fa fa-search"></i>SEARCH</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-12 table-responsive">
            <table class="table table-bordered">
                <thead class="thead-primary shadow-primary">
                    <tr>
                        <th>STUDENT ID</th>
                        <th>NAME</th>
                        <th>ACCOUNT TYPE</th>
                        <th>USERNAME</th>
                        <th>DATE CREATED</th>
                        <th>OPTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="isLoading">
                        <td class="text-center" colspan="6">
                           Loading <img src="/images/ajax-loader.gif" alt="Loading....">
                        </td>
                    </tr>
                    <tr v-if="!users.data && !isLoading">
                        <td colspan="6">
                            <p class="mb-0 text-center">
                                <i>No user has been found</i>
                            </p>
                        </td>
                    </tr>
                    <tr v-else-if="!isLoading" v-for="(user, i) in users.data" :key="i">
                        <td style="vertical-align:middle">
                            {{ user.user_id }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ user.name }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ user.account_type == 1 ? 'Admin' : 'Student' }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ user.email }}
                        </td>
                        <td style="vertical-align:middle">
                            {{ user.created_at | humanReadableFormat }}
                        </td>
                        <td style="vertical-align: middle;">
                            <div class="btn-group btn-group-sm" role="group">
                                <button type="button" title="Edit" class="btn btn-sm btn-success" @click="edit(user)">
                                    <span class="fa fa-edit"></span>
                                </button>

                                <button @click="destroy(user)" type="button" class="btn btn-sm btn-danger">
                                    <span class="fa fa-trash"></span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-12 justify-content-right">
            <Pagination
                :object="users" 
                module="USERS_MODULE/FETCH_USERS"
                :query="`keyword=${keyword}&date_from=${date_from}&date_to=${date_to}`"/>
        </div>
    </div>
</template>

<script>
import Pagination from '../../../components/pagination/index';

export default {
    computed: {
        isLoading () {
            return this.$store.getters['USERS_MODULE/GET_LOADING_STATE'];
        },
        users () {
            return this.$store.getters['USERS_MODULE/GET_USERS'];
        },
        keyword: {
            get () {
                return this.$store.getters['FILTER_MODULE/GET_KEYWORD'];
            },
            set (newVal, oldVal) {
                this.$store.commit('FILTER_MODULE/SET_KEYWORD', newVal);
            }
        },
        date_from () {
            return this.$store.getters['FILTER_MODULE/GET_DATE_FROM'];
        },
        date_to () {
            return this.$store.getters['FILTER_MODULE/GET_DATE_TO'];
        }
    },
    methods: {
        edit (user) {
            this.$store.commit('FORM_MODULE/SET_FORM_TYPE', 'EDIT_USER')
            this.$store.commit('USERS_MODULE/SET_USER', user);
            $('#usermodal').modal('show');
        },
        destroy (user) {
            console.log(user)
            let options = { html:true, loader: true };
            //https://github.com/Godofbrowser/vuejs-dialog
            this.$dialog
            .confirm(`Delete <strong>${user.name}</strong> record ?`, options)
            .then(dialog => {
                this.$store.dispatch('USERS_MODULE/DELETE_USER', user)
                .then(() => {
                    dialog.close();
                    this.$store.dispatch('USERS_MODULE/FETCH_USERS',`api/users?keyword=${this.keyword}&date_from=${this.date_from}&date_to=${this.date_to}`)
                })
            })
            .catch(() => {

            })
        },
        handleSearch () {
            let url = `/api/users?keyword=${this.keyword}&date_from=${this.date_from}&date_to=${this.date_to}`;
            this.$store.dispatch('USERS_MODULE/FETCH_USERS', url);
        }
    },
    components: {
        Pagination
    }
}
</script>

<style>

</style>
