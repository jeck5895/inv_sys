<template>
    <table id="example" class="table table-bordered">
        <thead class="thead-primary">
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody></table
></template>

<script>
export default {
    props: {
        headers: {
            type: Array
        },
        items: {
            type: Array
        },
        isLoading: {
            type: Boolean
        }
    }
};
</script>

<style></style>
