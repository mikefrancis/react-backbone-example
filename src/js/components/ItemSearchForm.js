import React from 'react';

class ItemSearchForm extends React.Component {
  /**
   * Create a new component.
   *
   * @return {void}
   */
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Event listener for searching.
   *
   * @return {void}
   */
  onChange(e) {
    this.props.search(e.target.value);
  }

  /**
   * Render the component.
   *
   * @return {JSX}
   */
  render() {
    return (
      <form>
        <input placeholder="Enter search text" onChange={this.onChange} />
      </form>
    );
  }
}

export default ItemSearchForm;
