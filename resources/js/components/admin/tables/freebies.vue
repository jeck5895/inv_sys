<template>
  <table id="example" class="table table-bordered">
    <thead class="thead-primary">
      <tr>
        <th width="10%">#</th>
        <th width="60%">NAME</th>
        <th width="10%">PRICE</th>
        <th width="20%" style="witdh: 10%">OPTIONS</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td class="text-center" colspan="8">
          Loading
          <img src="/images/ajax-loader.gif" alt="Loading...." />
        </td>
      </tr>
      <tr v-if="!loading && items.data && items.data.length == 0">
        <td colspan="9">
          <p class="text-center">
            <em>No data to show...</em>
          </p>
        </td>
      </tr>
      <template v-if="!loading && items.data && items.data.length != 0">
        <tr v-for="(item, i) in items.data" :key="i">
          <td style="vertical-align: middle;">{{ item.id }}</td>
          <td style="vertical-align: middle;">{{ item.name }}</td>
          <td style="vertical-align: middle;">{{ item.formatted_price }}</td>
          <td>
            <button
              @click.prevent="$emit('on-edit', item)"
              type="button"
              data-toggle="modal"
              data-target="#addmodal"
              class="btn btn-secondary btn-sm waves-effect waves-light m-1"
            >
              <i class="fa fa-edit fa-lg"></i> EDIT
            </button>
            <button
              @click.prevent="$emit('on-delete', item)"
              type="button"
              class="btn btn-danger btn-sm waves-effect waves-light"
              id="confirm-btn-alert4"
            >
              <i class="fa fa-trash fa-lg"></i> DELETE
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
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
