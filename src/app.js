import React from 'react';
import Login from './components/login';
import actions from './actions2/user';
import statusStore from './store/main'

window.ttt = actions;

let App = React.createClass({
    mixins: [Reflux.connect(statusStore)],
    onClick: function () {
        actions.login(' batya ');
        console.log('ntya');
    },
    render () {
        return (
            <div className="commentBox" onClick={this.onClick}>
                Hello, world! I am{this.state.page2} a CommentBox. {this.state.page}
            </div>
        );
    }
});

React.render(
    <App/>,
    document.body
);
