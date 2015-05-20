import React from 'react';
import Backbone from 'backbone';
import Item from './Item';
import ItemSearchForm from './ItemSearchForm';

var ItemList = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },

  componentDidMount: function() {
    return this.getItems();
  },

  getItems: function() {
    var ItemsCollection = Backbone.Collection.extend({
      url: 'http://reqr.es/api/unknown',
      parse: function(results) {
        return results.data;
      }
    });
    var items = new ItemsCollection();
    items.fetch().done(function() {
      this.setState({ items: items.toJSON() });
    }.bind(this));
  },

  searchItems: function(query) {
    query = query.toLowerCase().trim();
    if (query === '') {
      return this.getItems();
    }
    var filteredItems = [];
    this.state.items.map(function(item) {
      if (item.name.toLowerCase().indexOf(query) !== -1) {
        filteredItems.push(item)
      }
    });
    this.setState({ items: filteredItems });
  },

  render: function() {
    var newItem = function(item) {
      return <Item name={item.name} pantone_value={item.pantone_value} />
    };

    var items;
    if (this.state.items.length > 0) {
      items = this.state.items.map(newItem);
    } else {
      items = <p>No results.</p>;
    }

    return (
      <div>
        <h1>Items</h1>
        <ItemSearchForm search={this.searchItems} />
        {items}
      </div>
    );
  }
});

export default ItemList;
