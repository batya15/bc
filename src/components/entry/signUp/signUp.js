import React from 'react';
import singIn from 'css!./signUp';

export default React.createClass({
    render () {
        return (
            <div>
                <label>Email</label>
                <input/>
                <label>Nickname</label>
                <input/>
                <label>Password</label>
                <input/>
                <label>Password 2</label>
                <input/>
                <button>sign up</button>
            </div>
        )
    }
});