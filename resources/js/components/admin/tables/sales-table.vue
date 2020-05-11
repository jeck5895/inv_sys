<template>
  <table id="example" class="table table-bordered">
    <thead class="thead-primary">
      <tr>
        <th>DATE</th>
        <th>RECEIPT</th>
        <th>PAYMENT MODE</th>
        <th>PAYMENT TERM</th>
        <th>TOTAL ITEM COST</th>
        <th>TOTAL FREEBIES COST</th>
        <th>GROSS INCOME</th>
        <th>NET INCOME</th>
        <th>OPTION</th>
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
        <tr
          v-for="(item, i) in items.data"
          :key="i"
          @click="$emit('on-edit', item)"
        >
          <td>{{ item.checkout_date | humanReadable }}</td>
          <td>{{ item.receipt_no }}</td>
          <td>{{ item.payment_mode }}</td>
          <td>
            <span v-if="item.payment_terms === null">N/A</span>
            <span v-else>{{ item.payment_terms }} months</span>
          </td>
          <td>{{ item.total_item_cost.formatted }}</td>
          <td>{{ item.total_freebies_cost.formatted }}</td>
          <td>{{ item.revenue.formatted }}</td>
          <th>{{ item.net_income.formatted }}</th>
          <td>
            <button
              @click.prevent="$emit('on-edit', item)"
              type="button"
              data-toggle="modal"
              data-target="#addmodal"
              class="btn btn-sm waves-effect waves-light m-1"
            >
              <i class="fa fa-edit fa-lg"></i>
            </button>
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

<style lang="scss">
.table td {
  cursor: pointer;
}
</style>
