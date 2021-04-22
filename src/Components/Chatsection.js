import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';

import './chatsection.css';

function ChatSection() {
    return (
        <div className="ChatSection">

           <div className="ChatSection_Header">
           <IconButton>
                    <Avatar>P</Avatar>
                </IconButton>


                <div className="ChatSection_Header_right">
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                    
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div> 
            <div className="ChatSection_Chatbox">
                {/* here are our chatting messages code come */}
            </div>
            <div className="ChatSection_Footer">
                <SentimentVerySatisfiedOutlinedIcon/>
                <AttachFileIcon/>
                <input type="text" placeholder="Type a message"/>
                <MicIcon/>
            
            </div>
        </div>
    )
}

export default ChatSection;
