import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar_header">
                <IconButton>
                    <Avatar>P</Avatar>
                </IconButton>
                <div className="Sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="Sidebar_Search">
                <div className="Sidebar_search_container">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input type="text" placeholder="Search or Start new chat" />
                </div>
            </div>
            <div className="Sidebar_chats">
                    <SidebarChat addnewchat/>
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                    
            </div>

        </div>
    )
}

export default Sidebar
