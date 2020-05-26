<template>
  <div class="row clearfix">
    <div class="col-md-4 float-left">
      Displaying from {{ data.from }} to {{ data.to }} total of
      {{ data.total }}
    </div>

    <div class="col-md-8 float-right">
      <nav aria-label="...">
        <ul :class="'pagination pagination-sm justify-content-end'">
          <li :class="1 === data.current_page ? 'page-item disabled' : ''">
            <a
              class="page-link"
              @click.prevent="$emit('first-page', data.first_page_url)"
              href="#"
              tabindex="-1"
            >
              <span class="fa fa-long-arrow-left"></span>
            </a>
          </li>
          <li
            :class="
              data.prev_page_url == null ? 'page-item disabled' : 'page-item'
            "
          >
            <a
              class="page-link"
              @click.prevent="$emit('prev-page', data.prev_page_url)"
              href="#"
              tabindex="-1"
              >Previous</a
            >
          </li>
          <template v-for="i in links">
            <li
              :class="data.current_page == i ? 'page-item active' : 'active'"
              :key="i"
            >
              <a
                class="page-link"
                @click.prevent="$emit('to-page', i)"
                href="#"
                >{{ i }}</a
              >
            </li>
          </template>
          <li
            :class="
              data.next_page_url == null ? 'page-item disabled' : 'page-item'
            "
          >
            <a
              class="page-link"
              @click.prevent="$emit('next-page', data.next_page_url)"
              href="#"
              >Next</a
            >
          </li>
          <li
            :class="
              data.last_page == data.current_page ? 'page-item disabled' : ''
            "
          >
            <a
              class="page-link"
              @click.prevent="$emit('last-page', data.last_page_url)"
              href="#"
            >
              <span class="fa fa-long-arrow-right"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      required: true
    }
  },
  data: () => ({
    max_visible: 10
  }),
  computed: {
    startPage() {
      // When on the first page
      if (this.data.length > 0 && this.data.current_page === 1) {
        return 1;
      }
      // When on the last page
      if (
        this.data.length > 0 &&
        this.data.current_page === this.data.last_page
      ) {
        return this.data.last_page - 1;
      }
      // When in between
      return this.data.length > 0 ? this.data.current_page - 1 : 1;
    },
    links() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.max_visible - 1, this.data.last_page);
        i++
      ) {
        range.push(i);
      }

      return range;
    }
  }
};
</script>
