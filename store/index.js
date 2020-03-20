const itemGetter = require("./../plugins/itemGetter").itemGetter;

export const state = () => ({
  itemIds: []
});

export const mutations = {
  setItemIds: (state, itemIds) => {
    state.itemIds = itemIds;
  }
};

export const actions = {
  /**
   * get post id list
   */
  getPostList(context, url) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(url)
        .then(res => {
          context.commit("setItemIds", res.data);
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  /**
   * get post info for a particular range
   */
  getPostListRange(context, object) {
    return new Promise((resolve, reject) => {
      const promises = [];
      for (let i = object.startIndex; i < object.lastIndex; i++) {
        promises.push(
          itemGetter.getItemById(this, context.state.itemIds[i].toString())
        );
      }

      Promise.all(promises)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export const getters = {
  itemIds: state => {
    return state.itemIds;
  },

  itemIdLength: state => {
    return state.itemIds.length;
  }
};
