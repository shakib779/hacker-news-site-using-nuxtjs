<template>
  <Comments class="post-list"/>
</template>

<script>
import Comments from './../../components/Comments';
export default {
  components: {
    Comments
  },
  data () {
    return {
      title: "Comments"
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'It will show comments against the story', name: 'It will show comments against the story', content: 'Description of comments' }
      ]
    }
  },
};
</script>

<style scoped></style>