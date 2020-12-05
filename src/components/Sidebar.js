import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColor';
import IconButton from '@material-ui/core/IconButton';
import SidebarThread from './SidebarThread';
import Avatar from '@material-ui/core/Avatar';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from '../userSlice';
import db from '../misc/firebase';
import ModalAddThread from './ModalAddThread';

export default function Sidebar() {

    const [openModalThread, setOpenModalThread] = useState(false)

    const handleModalOpen = () => {
        setOpenModalThread(true);
    };

    const handleClose = () => {
        setOpenModalThread(false);
    };

    const user = useSelector(selectUser);

    const [threads, setThreads] = useState();

    useEffect(() => {
        db.collection('threads').onSnapshot(snapshot =>
            setThreads(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        )
    }, []);



    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon />
                    <input type="text" placeholder="Recherche" className="sidebar__searchInput" />
                </div>
                <IconButton variant="outlined" className="sidebar__button" onClick={handleModalOpen}>
                    <BorderColorOutlinedIcon />
                </IconButton>
            </div>
            <div className="sidebar__threads">
                {/*{threads?.filter(thread => thread.data.uid !== user.uid)
                    .map(thread =>
                        <SidebarThread name={thread.data.name} id={thread.id} photo={thread.data.photo} />
                    )}  */}
                {threads?.map(thread =>
                    <SidebarThread name={thread.data.name} id={thread.id} photo={thread.data.photo} />
                )}
            </div>
            <div className="sidebar__bottom">
                <Avatar className="sidebar__bottom__avatar" alt={user.displayName} src={user.photo} />
                <IconButton>
                    <PhoneOutlinedIcon />
                </IconButton>
                <IconButton>
                    <QuestionAnswerOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsApplicationsOutlinedIcon />
                </IconButton>
            </div>
            <ModalAddThread openModalThread={openModalThread} handleClose={handleClose} />
        </div>
    )
}
