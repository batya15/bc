import React from 'react';
import Reflux from 'reflux';
import Login from 'components/login';
import actions from 'actions/user';
import statusStore from 'store/main'
import style from 'css!style/style'

let App = React.createClass({
    mixins: [Reflux.connect(statusStore)],
    onClick: function () {
        actions.login('batya');
    },
    render () {
        return (
            <div className="commentBox" onClick={this.onClick}>
                <Login/>
                Hello, world! I am{this.state.page2} a CommentBox. {this.state.page}
            </div>
        );
    }
});

React.render(
    <App/>,
    document.body
);
