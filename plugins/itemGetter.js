const url = require("./../static/url").url;

export const itemGetter = {
  getItemById(context, id) {
    return new Promise(function(resolve, reject) {
      context.$axios
        .get(url.getItemById + id + ".json")
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

