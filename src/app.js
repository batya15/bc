import React from 'react';
import Reflux from 'reflux';
import actions from 'actions/app';
import loadingStore from 'store/loading'
import Loading from 'components/loading/loading';
import Entry from 'components/entry/entry';

import normalize from 'css!vendor/styles/normalize'
import mainCss from 'css!styles/main'

let App = React.createClass({
    mixins: [Reflux.connect(loadingStore)],
    render () {
        var app;
        if (this.state.ready || true) {
            app = <Entry/>;
        } else {
            setTimeout(()=> {actions.loading('loading', 10);}, 300);
            app = <Loading total={this.state.total}/>;
        }

        return (
            <div className="App">
                {app}
            </div>
        );
    }
});

React.render(
    <App/>,
    document.body
);
