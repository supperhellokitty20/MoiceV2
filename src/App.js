import './App.css';
import React from 'react' ; 
import Peer from 'peerjs'; 
import Button from '@mui/material/Button'   ;
import {Link}  from 'react-router-dom' ;

/*
 * Together with Stat components show connection status 
 * */
function Name(connStat){
    return (
        <div className="signal">
        <p>{connStat.signal}</p> 
        </div>
    ) ;
} 
function Stat(connStat){
    return (
         <div className="signal">
            <h4>Connection Status</h4>                        
            <p>{connStat.signal}</p>
        </div>
    ) ; 
} 

function Inputid(){
    return (
        <p>Input Peer id:</p>    
    ) ;         
} 
function ChatBox(role){
    return (
        <p>Message Box</p>
    ) ;  
}

function initSender(role){
    return (
        <p> You are the sender</p> 

    ); 
} 
function initRecieve(){
    return (
        <p> You are the Reciever</p> 
    ); 
} 
function App() {
    var sig = "Connection status result" ; 
    return (
        <div className="App">
        <header className="App-header">
        <h1>Moice V2</h1>
        <p>Please Choose A role</p> 
        <Link to="/send">
            <Button variant="contained">Sender</Button>
        </Link>
        <br></br>
        <Link to="/recieve">
        <Button variant="contained">Receive</Button>
        </Link> 
        <Name signal={sig}></Name>
        <Stat signal={sig}></Stat> 
        </header>
        </div>
    );
}

export default App;
