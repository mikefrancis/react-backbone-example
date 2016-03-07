import React from 'react';
import request from 'superagent';
import Item from './Item';
import ItemSearchForm from './ItemSearchForm';

class ItemList extends React.Component {
  /**
   * Create a new component.
   *
   * @param  {object} props
   * @return {void}
   */
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  /**
   * Get the items once the component has mounted.
   *
   * @return {void}
   */
  componentDidMount() {
    return this.getItems();
  }

/**
 * Get items from API.
 *
 * @return {void}
 */
  getItems() {
    request.get('http://reqres.in/api/users?page=2')
        .end((err, res) => {
          this.setState({ items: res.body.data });
        });
  }

  /**
   * Search the results for a string.
   *
   * @param  {string} query
   * @return {void}
   */
  searchItems(query) {
    query = query.toLowerCase().trim();

    // if (query === '') {
    //   return this.getItems();
    // }
    //
    // let filteredItems = [];
    // this.state.items.map((item) => {
    //   if (item.name.toLowerCase().indexOf(query) > 0) {
    //     filteredItems.push(item);
    //   }
    // });
    //
    // this.state.items = filteredItems;
  }

/**
 * Render the component.
 *
 * @return {JSX}
 */
  render() {
    let newItem = (item) => {
      return <Item key={item.id} firstName={item.first_name} lastName={item.last_name} />;
    };

    let items;

    if (this.state.items.length > 0) {
      items = (
          <div>
              <ItemSearchForm search={this.searchItems} />
              <div>
                {this.state.items.map(newItem)}
              </div>
          </div>
      );
    } else {
      items = (<p>No results.</p>);
    }

    return (
      <div>
        <h1>Items</h1>

                                                                                                                                                                                                                                                                {items}
      </div>
    );
  }
}

export default ItemList;
