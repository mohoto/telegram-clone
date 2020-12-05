import React, { useState, useEffect } from 'react';
import './Thread.css';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../userSlice';
import { selectUser } from '../userSlice';
import { selectThread } from '../threadSlice';
import db from '../misc/firebase';
import firebase from 'firebase';
import Message from './Message'

const options = [
    'Deconnexion',
    'Profile'

];

const ITEM_HEIGHT = 48;

export default function Thread() {


    const user = useSelector(selectUser);
    const thread = useSelector(selectThread);

    /***LogOut**/
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout());
    }

    const [messages, setMessages] = useState();

    useEffect(() => {
        if (thread) {
            db.collection('threads')
                .doc(thread)
                .collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot =>
                    setMessages(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                )
        }
    }, [thread]);

    console.log(messages);

    const [input, setInput] = useState('');

    const sendMessage = e => {
        e.preventDefault();
        if (thread) {
            db.collection('threads')
                .doc(thread)
                .collection('messages').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    message: input,
                    uid: user.uid,
                    photo: user.photo,
                    email: user.email,
                    name: user.displayName
                })
            setInput('');
        }
        else {
            setInput('');
        }
    }
    /******Menu More************/
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="thread">
            <div className="thread__header">
                <div className="thread__header__contents">
                    <Avatar alt={user.displayName} src={user.photo} />
                    <div className="thread__header__contents__info">
                        <h4>{user.displayName}</h4>
                        <h5>Last seen</h5>
                    </div>
                </div>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreHorizIcon className="thread__header__details" />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Deconnexion'} onClick={option === 'Deconnexion' ? logOut : handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <div className="thread__messages">
                {messages?.map(message =>
                    <Message id={message.id} data={message.data} />
                )}
            </div>
            <div className="thread__input">
                <form>
                    <IconButton>
                        <InsertEmoticonIcon />
                    </IconButton>
                    <input placeholder="message" value={input} onChange={e => setInput(e.target.value)} />
                    <IconButton>
                        <TimerOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <SendIcon type="submit" className="thread__messages__button" onClick={sendMessage} />
                    </IconButton>
                    <IconButton>
                        <MicNoneOutlinedIcon />
                    </IconButton>
                </form>
            </div>
        </div>
    )
}
