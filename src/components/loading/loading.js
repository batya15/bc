import React from 'react';
import style from 'css!./loading';

export default React.createClass({
    render () {
        return (
            <div className="Loading">
                <div className='inner'>
                    ({this.props.total}) loading...
                </div>
            </div>
        )
    }
});