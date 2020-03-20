<template>
  <NewStories />
</template>

<script>
import NewStories from './../components/NewStories';
export default {
  middleware: "getAllItemIdForNewStories",
  data () {
    return {
      title: "New Stories"
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'It will show the recent stories', name: 'It will show the recent stories', content: 'Description of new stories' }
      ]
    }
  },
  components: {
    NewStories
  }
};
</script>

<style scoped></style>
