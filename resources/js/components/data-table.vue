<template>
    <div class="row">
        <div class="col-lg-12">
            <SearchForm />
        </div>
        <div class="col-lg-12">
            <table id="example" class="table table-bordered">
                <thead class="thead-primary">
                    <tr>
                        <th v-for="(header, i) in columns" :key="i">
                            {{ header.label }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="loading">
                        <td class="text-center" colspan="8">
                            Loading
                            <img
                                src="/images/ajax-loader.gif"
                                alt="Loading...."
                            />
                        </td>
                    </tr>
                    <tr v-if="!loading && items.data && items.data.length == 0">
                        <td colspan="9">
                            <p class="text-center">
                                <em>No data to show...</em>
                            </p>
                        </td>
                    </tr>
                    <template
                        v-if="!loading && items.data && items.data.length != 0"
                    >
                        <tr v-for="(item, i) in items.data" :key="i">
                            <td
                                v-for="index in columns"
                                :key="index.name"
                                style="vertical-align: middle;"
                            >
                                {{ item.index }}
                            </td>

                            <td>
                                <slot name="table-body-option"> </slot>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="col-lg-12">
            <Pagination />
        </div>
    </div>
</template>

<script>
import Pagination from "./Pagination";
import SearchForm from "./filters/search";

export default {
    props: {
        items: {
            // actual items
            type: Array
        },
        columns: {
            // item column e.g. name, item_id to be use on looping
            type: Array,
            required: true
        },
        loading: {
            type: Boolean
        }
    },
    components: {
        SearchForm,
        Pagination
    }
};
</script>

<style></style>
