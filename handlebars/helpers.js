module.exports = {
    'property': function (o, k) {
      return o[k];
    },
    'json': function (o) {
        return JSON.stringify(o);
    }
};
