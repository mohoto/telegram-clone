import React from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColor';
import IconButton from '@material-ui/core/IconButton';
import SidebarThread from './SidebarThread';
import Avatar from '@material-ui/core/Avatar';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon />
                    <input type="text" placeholder="Recherche" className="sidebar__searchInput" />
                </div>
                <IconButton variant="outlined" className="sidebar__button">
                    <BorderColorOutlinedIcon />
                </IconButton>
            </div>
            <div className="sidebar__threads">
                <SidebarThread />
                <SidebarThread />
                <SidebarThread />
            </div>
            <div className="sidebar__bottom">
                <Avatar className="sidebar__bottom__avatar" />
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
        </div>
    )
}
