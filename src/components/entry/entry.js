import React from 'react';
import Tabs from 'react-simpletabs';
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';
import style from 'css!./entry.css';

export default React.createClass({
    render () {
        return (
            <div className='StartPage'>
                <Tabs className='inner'>
                    <Tabs.Panel className='tab active' title='sign in'>
                        <SignIn/>
                    </Tabs.Panel>
                    <Tabs.Panel className='tab' title='sign up'>
                        <SignUp/>
                    </Tabs.Panel>
                </Tabs>
            </div>
        )
    }
});