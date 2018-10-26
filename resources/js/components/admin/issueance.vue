<template>
    <div class="container-fluid">
        <!-- Breadcrumb -->
        <div class="row pt-2 pb-2">
            <div class="col-sm-9">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javaScript:void();">Home</a></li>
                    <li class="breadcrumb-item"><a href="javaScript:void();">User Account</a></li>
                    <li class="breadcrumb-item"><a href="javaScript:void();">Register</a></li>
                </ol>
            </div>
            <div class="col-sm-3">
                <div class="btn-group float-sm-right">
                    <button type="button" class="btn btn-outline-primary waves-effect waves-light"><i class="fa fa-cog mr-1"></i>
                        Setting</button>
                    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split waves-effect waves-light"
                        data-toggle="dropdown">
                        <span class="caret"></span>
                    </button>
                    <div class="dropdown-menu">
                        <a href="javaScript:void();" class="dropdown-item">Action</a>
                        <a href="javaScript:void();" class="dropdown-item">Another action</a>
                        <a href="javaScript:void();" class="dropdown-item">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a href="javaScript:void();" class="dropdown-item">Separated link</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->
        <!-- Table -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header"><i class="fa fa-clone"></i> My Inventory</div>

                    <div class="card-body table-responsive">
                        <div class="row">
                            <div class="col-lg-12 mx-auto">
                                <div class="card bg-primary shadow-primary">
                                    <div class="card-body">
                                        <div class="card-title text-uppercase text-white"><i class="	fa fa-share-square-o"></i>
                                            Supplies Issuance</div>
                                        <hr>
                                        <form class="color-form">
                                            <div class="form-group row">
                                                <label for="input-33" class="col-sm-2 col-form-label">Full Name</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="input-33" placeholder="Enter First Name">
                                                </div>
                                                <!-- <label for="input-34" class="col-sm-2 col-form-label">Last Name</label>
                                                <div class="col-sm-4">
                                                    <input type="text" class="form-control" id="input-34" placeholder="Enter Last Name">
                                                </div> -->
                                            </div>
                                            <div class="form-group row">
                                                <label for="input-35" class="col-sm-2 col-form-label">Department</label>
                                                <div class="col-sm-4">
                                                    <input type="text" class="form-control" id="input-35" placeholder="Enter Department">
                                                </div>
                                                <label for="input-36" class="col-sm-2 col-form-label">Student ID</label>
                                                <div class="col-sm-4">
                                                    <input type="text" class="form-control" id="input-36" placeholder="Enter Student Number">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="input-38" class="col-sm-2 col-form-label">Item Name</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control" id="basic-select">
                                                        <option style="color:gray">Please Select Item</option>
                                                        <option>Bag</option>
                                                        <option>Ballpen</option>
                                                        <option>Book</option>
                                                        <option>Lanyard</option>
                                                        <option>Pants</option>
                                                        <option>Pencil</option>
                                                        <option>Shirt</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="input-37" class="col-sm-2 col-form-label">Quanity</label>
                                                <div class="col-sm-10">
                                                    <input type="number" class="form-control" id="input-37" placeholder="Enter Quantity">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="input-38" class="col-sm-2 col-form-label">Remarks
                                                    (Optional)</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="input-38" placeholder="Enter Remarks">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label"></label>
                                                <div class="col-sm-10">
                                                    <button type="submit" class="btn btn-link bg-white text-info shadow px-5"><i
                                                            class="icon-check"></i> Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table id="default-datatable" class="table table-bordered">
                            <thead class="thead-primary shadow-primary">
                                <tr>
                                    <th>Item Name</th>
                                    <th>Item Code</th>
                                    <th>Unit</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Site</th>
                                    <th>Date Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pencil</td>
                                    <td>CODE</td>
                                    <td>PCS</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>Sumacab</td>
                                    <td>14 July 2018</td>
                                </tr>
                                <tr>
                                    <td>Ballpen</td>
                                    <td>CODE</td>
                                    <td>PCS</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>Sumacab</td>
                                    <td>14 July 2018</td>
                                </tr>
                                <tr>
                                    <td>Lanyard</td>
                                    <td>CODE</td>
                                    <td>PCS</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>Sumacab</td>
                                    <td>14 July 2018</td>
                                </tr>
                                <tr>
                                    <td>Book</td>
                                    <td>CODE</td>
                                    <td>PCS</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>Sumacab</td>
                                    <td>14 July 2018</td>
                                </tr>
                                <tr>
                                    <td>Pants</td>
                                    <td>CODE</td>
                                    <td>PCS</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>Sumacab</td>
                                    <td>14 July 2018</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>CODE</td>
                                    <td>PCS</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>Sumacab</td>
                                    <td>14 July 2018</td>
                                </tr>
                                <tr>
                                    <td>Bag</td>
                                    <td>CODE</td>
                                    <td>PCS</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>Sumacab</td>
                                    <td>14 July 2018</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Item Code</th>
                                    <th>Unit</th>

                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Site</th>
                                    <th>Date Added</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
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