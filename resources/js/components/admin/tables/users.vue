<template>
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header"><i class="fa fa-user"></i> Account List</div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="example" class="table table-bordered">
                        <thead class="thead-primary shadow-primary">
                            <tr>
                                <th>Full Name</th>
                                <th>Student ID</th>
                                <th>Role</th>

                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joe Irinco</td>
                                <td>JEKCIT-002</td>
                                <td>Student</td>

                                <td>admin1234</td>
                                <td align="center">
                                    <button class="btn btn-primary waves-effect waves-light" data-toggle="modal"
                                        data-target="#primarymodal">UPDATE</button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light" id="confirm-btn-alert1">REMOVE
                                    </button>

                                </td>
                            </tr>
                            <tr>
                                <td>Jesser Galapon</td>
                                <td>JEKCIT-001</td>
                                <td>Admin</td>

                                <td>admin1234</td>
                                <td align="center">
                                    <button class="btn btn-primary waves-effect waves-light" data-toggle="modal"
                                        data-target="#primarymodal">UPDATE</button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light" id="confirm-btn-alert2">REMOVE
                                    </button>

                                </td>
                            </tr>
                            <tr>
                                <td>Rommel Lacap</td>
                                <td>JEKCIT-003</td>
                                <td>Admin</td>

                                <td>admin1234</td>
                                <td align="center">
                                    <button class="btn btn-primary waves-effect waves-light" data-toggle="modal"
                                        data-target="#primarymodal">UPDATE</button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light" id="confirm-btn-alert3">REMOVE
                                    </button>

                                </td>
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Full Name</th>
                                <th>Student ID</th>
                                <th>Role</th>

                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>