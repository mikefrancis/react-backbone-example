import React from 'react';

var Item = React.createClass({
  render: function() {
    return (
      <article>
        <h3>{this.props.name}</h3>
        <p>{this.props.pantone_value}</p>
      </article>
    );
  }
});

export default Item;
