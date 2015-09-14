import React from 'react';
import singIn from 'css!./signIn';

export default React.createClass({
    render () {
        return (
            <div className='SignIn'>
                <div>SingIn Social</div>
                <button>VK</button>
                <button>FB</button>
                <button>G+</button>
                <div>SingIn Login and password</div>
                <label>Email</label>
                <input/>
                <label>Password</label>
                <input/>
                <button>sign in</button>
            </div>
        )
    }
});