/*rfce*/
import React, { useState, useEffect } from 'react';
import './SidebarThread.css';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setThread } from '../threadSlice'
import { selectThread } from '../threadSlice';

const SidebarThread = ({ name, id, photo }) => {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const thread = useSelector(selectThread);

    const dispatch = useDispatch();

    const threadClick = () => {
        dispatch(setThread({
            threadName: name,
            threadId: id
        }))
    }

    return (
        <div className={`sidebarThread ${thread == id ? "active" : ""}`} onClick={threadClick} key={id}>
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarThread__details">
                <h3>{name}</h3>
                <p>This is the info</p>
                <small className="sidebarThread__timestamp">Timestamp</small>
            </div>
        </div>
    )
}

export default SidebarThread

