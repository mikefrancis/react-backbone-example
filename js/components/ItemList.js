import React from 'react';
import Item from './Item';
import ItemSearchForm from './ItemSearchForm';
import ItemsCollection from './../collections/ItemsCollection';

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
    var items = new ItemsCollection();
    items.on('add', function(){
      this.setState({ items: items.toJSON() });
    }.bind(this)).fetch();
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
