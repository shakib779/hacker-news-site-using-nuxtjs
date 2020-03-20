const itemGetter = require("./../plugins/itemGetter").itemGetter;

export const mixin = {
  methods: {
    /**
    * get any item (post, comment or reply) by id
    * */
    getItemById (context, id) {
      return itemGetter.getItemById(context, id);
    }
  }
}
