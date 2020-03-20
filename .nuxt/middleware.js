const middleware = {}

middleware['getAllItemIdForNewStories'] = require('../middleware/getAllItemIdForNewStories.js')
middleware['getAllItemIdForNewStories'] = middleware['getAllItemIdForNewStories'].default || middleware['getAllItemIdForNewStories']

middleware['getAllItemIdForTopStories'] = require('../middleware/getAllItemIdForTopStories.js')
middleware['getAllItemIdForTopStories'] = middleware['getAllItemIdForTopStories'].default || middleware['getAllItemIdForTopStories']

middleware['invalidUrl'] = require('../middleware/invalidUrl.js')
middleware['invalidUrl'] = middleware['invalidUrl'].default || middleware['invalidUrl']

export default middleware
