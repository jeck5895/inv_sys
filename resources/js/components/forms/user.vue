<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card bg-primary shadow-primary">
                <div class="card-body">
                    <div class="card-title text-uppercase text-white"><i class="fa fa-address-book-o"></i> User
                        Registration</div>
                    <hr>
                    <br>
                    <form @submit.prevent="handleUserRegister" class="color-form">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="input-1">Full Name</label>
                                <input type="text" class="form-control" id="input-1" placeholder="Enter Full Name">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="input-4">Student ID</label>
                                <input type="text" class="form-control" id="input-4" placeholder="Student ID">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="basic-select">Account Type</label>

                            <select class="form-control" id="basic-select">
                                <option style="color:gray">Please Select</option>
                                <option>Admin</option>
                                <option>Student</option>

                            </select>

                        </div>
                        <div class="form-group">
                            <label for="input-6">Username</label>
                            <input type="email" class="form-control" id="input-6" placeholder="Enter Email Address">
                        </div>
                        <div class="form-group">
                            <label for="input-7">Password</label>
                            <input type="password" class="form-control" id="input-7" placeholder="Enter Password">
                        </div>
                        <div class="form-group">
                            <label for="input-8">Confirm Password</label>
                            <input type="password" class="form-control" id="input-8" placeholder="Confirm Password">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-link bg-white text-primary shadow px-5"><i class="icon-lock"></i>
                                Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-6 mx-auto">

            <ul class="list-group mb-6">
                <li class="list-group-item active-danger" style="background-color: #007bff; border:#007bff">Account List</li>
                <li class="list-group-item">Rommel Lacap</li>
                <li class="list-group-item">Joe Irinco</li>
                <li class="list-group-item">Jesser Galapon</li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleUserRegister () {
                console.log("User Register")
            }
        }
    }
</script>

<style>

</style>