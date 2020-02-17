<template>
    <div class="card">
        <div v-if="!noHeader" class="card-header clearfix">
            <slot name="card-header"> </slot>
            <div class="card-action">
                <slot name="card-action"></slot>
            </div>
        </div>
        <div class="card-body">
            <slot name="card-body"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        noHeader: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style></style>
