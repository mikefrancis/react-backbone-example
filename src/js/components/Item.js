import React from 'react';

class Item extends React.Component {
  /**
   * Render the component.
   *
   * @return {JSX}
   */
  render() {
    return (
      <article>
        <h3>{this.props.firstName} {this.props.lastName}</h3>
      </article>
    );
  }
}

export default Item;
