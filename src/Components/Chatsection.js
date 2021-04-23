import React,{useState,useEffect} from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';


import './chatsection.css';

function ChatSection() {

    const [seed,setSeed]=useState('');
    const[input,setInput]=useState('');

    const sendMessage=(e)=>{
       e.preventDefault();
       console.log("Your typed",input);
       setInput('');
    }

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    return (
        <div className="ChatSection">

           <div className="ChatSection_Header">
             <IconButton>
                  <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
             </IconButton>
             <div className="ChatSection_Header_info">
                 <h3>Room Name</h3>
                 <p>Last seen at...</p>
             </div>


                <div className="ChatSection_Header_right">
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                    
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div> 
            <div className="chat_body">
                <p className={`chat_message  ${false && "chat_receiver"}`}>
                    <span className="chat_name">Aditya Pratap</span>
                    Aur Bhai ki haal chal?
                    <span className="chat_timestemp"> 11:50pm</span>

                </p>
                <p className={`chat_message  ${true && "chat_receiver"}`}>
                    <span className="chat_name">Aditya Pratap</span>
                    Aur Bhai ki haal chal?
                    <span className="chat_timestemp"> 11:50pm</span>

                </p>
                <p className={`chat_message  ${false && "chat_receiver"}`}>
                    <span className="chat_name">Aditya Pratap</span>
                    Aur Bhai ki haal chal?
                    <span className="chat_timestemp"> 11:50pm</span>

                </p>
                <p className={`chat_message  ${true && "chat_receiver"}`}>
                    <span className="chat_name">Aditya Pratap</span>
                    Aur Bhai ki haal chal?
                    <span className="chat_timestemp"> 11:50pm</span>

                </p>
               
            </div>
            <div className="chat_footer">
                <SentimentVerySatisfiedOutlinedIcon/>
                <AttachFileIcon/>
                <form>
                    <input    type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}  > Send a Message</button>
                </form>
                <MicIcon/>
            
            </div>
        </div>
    )
}

export default ChatSection;
