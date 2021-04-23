import React,{useEffect,useState} from 'react'
import { Avatar } from '@material-ui/core';
import ChatSection from './Chatsection';

function SidebarChat({addnewchat}) {

        const[seed,setSeed]=useState('');
    const createchat=()=>{
      const temp=prompt("Please Add  new chatRoom Name");
      if(temp){
          //DO some database stuff
      }
    }

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    // const handleChatRoom=()=>{
    //     <ChatSection  />
    // }

    return  !addnewchat?(
        <div className="Sidebarchats" >
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chatroominfo">
                <h3>Room Name</h3>
                <p>Last message..</p>
            </div>
        </div>
    ):(
        <div className="Sidebarchats" onClick={createchat}>
        <h3>Add Newchat</h3>
        </div>
    )
}

export default SidebarChat;
