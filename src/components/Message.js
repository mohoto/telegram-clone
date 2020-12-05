import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Message.css'
import { selectUser } from '../userSlice';
import { useSelector } from 'react-redux';
import moment from 'moment'

const currDay = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth();
    const yy = today.getFullYear();
    return dd;
}

console.log('jour', currDay());

export default function Message({ id, data: { message, uid, photo, email, timestamp } }) {

    const user = useSelector(selectUser);

    return (
        <div className={`message ${user.email === email && 'message__sender'}`} key={id} >
            <Avatar src={photo} className="message__photo" />
            <div className="message__contents">
                <p>{message}</p>
                <p>{new Date(timestamp?.toDate()).toLocaleTimeString()}</p>
                <small>{moment.locale()}</small>
            </div>
        </div >
    )
}
