<template>
  <div>
    <div class="center-aligned">
      <span>
        <a href="#" @click.prevent="gotoPreviousPage()">&lt;prev</a>
      </span>
      {{ currentPage }}/{{ totalPage }}
      <span>
        <a href="#" @click.prevent="gotoNextPage()">more&gt;</a>
      </span>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Pagination',

  data () {
    return {
      currentPage: 1,
      startIndex: 0
    }
  },

  methods: {
    gotoPreviousPage () {
      this.currentPage = Math.max(1, this.currentPage - 1)
      this.startIndex = Math.max(0, this.startIndex - 5)
      this.$emit('childToParent', this.startIndex)
    },

    gotoNextPage () {
      this.currentPage = Math.min(this.totalPage, this.currentPage + 1)
      this.startIndex = Math.min(this.itemIdLength - 5, this.startIndex + 5)
      this.$emit('childToParent', this.startIndex)
    }
  },

  computed: {
    ...mapGetters(['itemIdLength']),
    totalPage () {
      return Math.ceil(this.itemIdLength / 5.0)
    }
  },

  created () {
    this.currentPage = 1
    this.startIndex = 0
  }
}
</script>

<style lang="stylus" scoped>

</style>
