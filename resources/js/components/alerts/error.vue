<template>
    <div v-if="response.length" class="alert alert-danger alert-dismissible" role="alert">
        <!-- <button type="button" class="close" data-dismiss="alert">&times;</button> -->
        <div class="alert-icon">
            <i class="icon-close"></i>
        </div>
        <div class="alert-message">
            <!-- <p v-if="response.data.message" ><strong>{{ response.data.message }}</strong></p> -->
            <ul>
                <li v-for="(e,i) in response" :key="i">
                    {{ e }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            response: {
                required: true,
                type: Array
            }
        }
    }
</script>

<style>

</style>