const url = require('../static/url').url

export default function({ store, redirect }) {
  return store.dispatch("getPostList", url.getTopStoryListUrl)
}
