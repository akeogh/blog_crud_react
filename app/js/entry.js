//require('./react/components');

var React = require('react');
var ReactDOM = require('react-dom');

var EntryBox = React.createClass({
  render: function() {
    return(<h1>Hello world!</h1>);
  }
})

ReactDOM.render(<EntryBox />, document.getElementById('content'));
