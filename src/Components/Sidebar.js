import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import db from '../firebase';

function Sidebar() {

    const [rooms,setRooms]=useState([]);
    
    useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot)=>{
        setRooms(snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
        })))
    })
    }, []);


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
                    {   console.log("rooms ",rooms)}
                     {
                      
                        rooms.map((room)=> {
                            {console.log("roommmmm",room.id,room.data.name)}
                           return <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                        })
                     }
                    
            </div>

        </div>
    )
}

export default Sidebar
