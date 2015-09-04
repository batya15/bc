import React from './vendor/js/react.js';

let HelloMessage = React.createClass({
    render: function() {
        return React.createElement("div", null, "Hello 2 ", this.props.name);
    }
});

React.render(
    React.createElement(HelloMessage, {name: "John"}),
    document.body
);

console.log(React);