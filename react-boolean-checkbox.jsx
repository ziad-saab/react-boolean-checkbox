var React = require('react');

module.exports = React.createClass({
  handleChange: function() {
    this.props.valueLink.requestChange(!!this.refs.theCheckbox.getDOMNode().checked);
  },
  render: function() {
    return (
      <input ref="theCheckbox" type="checkbox" checked={this.props.valueLink.value} onChange={this.handleChange}/>
    );
  }
});
