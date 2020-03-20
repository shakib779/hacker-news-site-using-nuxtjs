<template>
  <div>
    <Pagination @childToParent="onChildClick" />
    <PostList v-bind:startIndex="startIndex" />
  </div>
</template>

<script>
const mixin = require('./../mixins/storyMixin').mixin;

export default {
  middleware: "getAllItemIdForTopStories",
  mixins: [mixin],
  head() {
    return {
      title: "Top Stories",
      meta: [
        {
          hid: "It will show the top stories",
          name: "It will show the top stories",
          content: "Description of top stories"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
