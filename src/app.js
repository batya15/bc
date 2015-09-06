import React from 'react';

var CommentBox = React.createClass({
    render () {
        return (
            <div className="commentBox" onClick={() => console.log(this)}>
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

React.render(
    <CommentBox />,
    document.body
);