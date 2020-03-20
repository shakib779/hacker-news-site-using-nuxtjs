import PostList from "./../components/PostList";
import Pagination from "./../components/Pagination";

export const mixin = {
  components: {
    PostList,
    Pagination
  },

  data() {
    return {
      startIndex: 0
    };
  },

  methods: {
    onChildClick(value) {
      this.startIndex = value;
    }
  }
}
