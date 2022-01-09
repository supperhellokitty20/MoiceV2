// A name box that change color based on connection status 
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