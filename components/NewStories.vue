<template>
  <div>
    <Pagination @childToParent="onChildClick" />
    <PostList v-bind:startIndex="startIndex" />
  </div>
</template>
<script>

const mixin = require('./../mixins/storyMixin').mixin;

export default {
  name: "NewStories",
  mixins: [mixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
