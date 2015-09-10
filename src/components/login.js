import React from 'react';
import style from 'css!./login';

console.log(style);

export default React.createClass({
    render () {
        return (
            <form>
                <label> login: </label>
                <input/>
                <label> password: </label>
                <input/>
            </form>
        );
    }
});