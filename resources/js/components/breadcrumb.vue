<template>
    <ol class="breadcrumb">
        <li v-for="(item, i) in items" :key="i" class="breadcrumb-item">
            <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
    </ol>
</template>

<script>
export default {
    props: {
        items: {
            required: true,
            type: Array
        }
    }
};
</script>

<style></style>
