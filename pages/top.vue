<template>
  <TopStories />
</template>

<script>
import TopStories from './../components/TopStories';
export default {
  middleware: "getAllItemIdForTopStories",
  components: {
    TopStories
  },
  data () {
    return {
      title: "Top Stories"
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'It will show the top stories', name: 'It will show the top stories', content: 'Description of top stories' }
      ]
    }
  },
};
</script>

<style scoped></style>
