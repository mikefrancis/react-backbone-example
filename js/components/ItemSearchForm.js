var React = require('react');

var ItemSearchForm = React.createClass({
  onChange: function(e) {
    this.props.search(e.target.value);
  },

  render: function() {
    return (
      <form>
        <input placeholder="Enter search text" onChange={this.onChange} />
      </form>
    );
  }
});

module.exports = ItemSearchForm;
