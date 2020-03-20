<template>
  <div class="post-list">
    <div v-for="(item, idx) in posts" :key="idx">
      <hr />
      <div class="item-story">
        <h5>
          <span style="color: #FF0000">{{ item.descendants }}</span>
          <span v-html="item.title" />
          <small>({{ item.url }})</small>
        </h5>
        <h5>
          by {{ item.by }} {{ item.time | getTimeDiffrence }} ago |
          <a
            href="#"
            @click.prevent="gotoComments(item.id);"
          >{{ item.kids? item.kids.length : 0 }} comments</a>
        </h5>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    startIndex: Number
  },

  data() {
    return {
      posts: []
    };
  },

  watch: {
    startIndex() {
      this.fetchPostList();
    }
  },

  methods: {
    gotoComments(id) {
      this.$router.push("comments/" + id.toString());
    },

    fetchPostList() {
      this.$store
        .dispatch("getPostListRange", {
          startIndex: this.startIndex,
          lastIndex: this.startIndex + 5
        })
        .then(res => {
          this.posts = res;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  created() {
    this.fetchPostList();
  }
};
</script>

<style lang="stylus" scoped></style>
