<template>
  <div class="post-list">
    <!-- Post information -->
    <h1>
      {{post.title}}
      <span v-html="post.title"></span>
      <small>({{post.url}})</small>
    </h1>
    <h5>{{post.descendants}} points | by {{post.by}} {{post.time | getTimeDiffrence }} ago</h5>

    <!-- Comment section  -->
    <h4 v-if="post.kids">{{post.kids.length}} comments</h4>
    <div v-if="post.kids">
      <Replies v-bind:replyIds="post.kids" />
    </div>
    <br />
  </div>
</template>

<script>
import Replies from "./../../components/Replies";
const itemGetter = require("./../../mixins/mixin").mixin;

export default {
  components: { Replies },
  mixins: [itemGetter],
  data() {
    return {
      post: {}
    };
  },

  async fetch () {
    this.post = await this.getItemById(this, this.$route.params.postId)
  },

  head() {
    return {
      title: "Comments",
      meta: [
        {
          hid: "It will show comments against the story",
          name: "It will show comments against the story",
          content: "Description of comments"
        }
      ]
    };
  }
};
</script>

<style scoped></style>