import Backbone from 'backbone';

var ItemsCollection = Backbone.Collection.extend({
  url: 'http://reqr.es/api/unknown',
  parse: function(results) {
    return results.data;
  }
});

export default ItemsCollection;
