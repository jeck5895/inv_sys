<template>
  <table id="example" class="table table-bordered">
    <thead class="thead-primary">
      <tr>
        <th>DATE</th>
        <th>RECEIPT</th>
        <th>AMOUNT</th>
        <th>PAYMENT TYPE</th>
        <th>PAYMENT TERM</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="isLoading">
        <td class="text-center" colspan="8">
          Loading
          <img src="/images/ajax-loader.gif" alt="Loading...." />
        </td>
      </tr>
      <tr v-if="!isLoading && items.data && items.data.length == 0">
        <td colspan="9">
          <p class="text-center">
            <em>No data to show...</em>
          </p>
        </td>
      </tr>
      <template v-if="!isLoading && items.data && items.data.length != 0">
        <tr v-for="(item, i) in items.data" :key="i">
          <td>{{ item.created_at | humanReadable }}</td>
          <td>{{ item.receipt_no }}</td>
          <td>{{ item.formatted_amount }}</td>
          <td>{{ item.payment_mode }}</td>
          <td>
            <span v-if="item.payment_terms === null">N/A</span>
            <span v-else>{{ item.payment_terms }} months</span>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
