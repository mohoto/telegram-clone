/*rfce*/
import React from 'react';
import './SidebarThread.css';
import Avatar from '@material-ui/core/Avatar';

const SidebarThread = () => {
    return (
        <div className="sidebarThread">
            <Avatar />
            <div className="sidebarThread__details">
                <h3>Thread Name</h3>
                <p>This is the info</p>
                <small className="sidebarThread__timestamp">Timestamp</small>
            </div>
        </div>
    )
}

export default SidebarThread

