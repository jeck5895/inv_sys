<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    User Account List
                </div>
                <div class="card-body">
                    <UsersTable/>
                </div>
            </div>
            <UserFormModal/>
        </div>
    </div>
</template>

<script>
import UsersTable from '../../components/users/tables/index';
import UserFormModal from '../../components/form-modal/user';

export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
           vm.$store.dispatch('USERS_MODULE/FETCH_USERS');
        })
    },
    components: {
        UsersTable, UserFormModal
    },
}
</script>

<style>

</style>
