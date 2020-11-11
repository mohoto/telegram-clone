import React, { useState } from 'react';
import './Thread.css';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../userSlice';
import { selectUser } from '../userSlice';

const options = [
    'Deconnexion',
    'Profile'

];

const ITEM_HEIGHT = 48;

export default function Thread() {

    const user = useSelector(selectUser);

    /***LogOut**/
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout());
    }

    const [input, setInput] = useState('');

    const sendMessage = e => {
        e.preventDefault();
        setInput('')
        console.log(input);
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
                    <Avatar />
                    <div className="thread__header__contents__info">
                        <h4>{user.dispalyName}</h4>
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
                <div className="thread__input">
                    <form>
                        <input placeholder="message" value={input} onChange={e => setInput(e.target.value)} />
                        <IconButton>
                            <SendIcon type="submit" className="thread__messages__button" onClick={sendMessage} />
                        </IconButton>
                    </form>
                </div>
            </div>
        </div>
    )
}
