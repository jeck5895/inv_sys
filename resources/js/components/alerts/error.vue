<template>
  <div
    v-if="response"
    class="alert alert-danger alert-dismissible"
    role="alert"
  >
    <!-- <button type="button" class="close" data-dismiss="alert">&times;</button> -->
    <!-- <div class="alert-icon">
            <i class="icon-close"></i>
        </div> -->
    <div class="alert-message">
      <p class="text-center" v-if="response.data">
        <strong>{{ response.data.message }}</strong>
      </p>
      <ul>
        <li v-for="(e, i) in errs" :key="i">
          {{ e }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import parser from "../../utils/parser";

export default {
  props: {
    response: {
      required: true,
      type: Object
    }
  },
  computed: {
    errs() {
      const list = parser(this.response);

      return list;
    }
  },
  mounted() {
    console.log(this.errors);
  }
};
</script>

<style>
</style>
