import React from 'react'
import {Link} from "react-router-dom";


const accountSid = 'ACcda42a0f050c6d614aecbb639c9323c6';
const authToken = 'b9fd447710596bb777d29eff3b1be111';
const client = require('twilio')(accountSid, authToken); 
//   message(); 
function Chat(){
  
  function message(){
   client.messages.create({ 
         body: 'Thank you for signing up for SocialIo sustainability reminders, We are so happy you want to help us help the planet.',  
         messagingServiceSid: 'MG38a84eae288c245641076fb0ccd3e9c9',      
         to: '+12405618977' 
       }) 
       .then(message => console.log(message.sid));
       alert('Message sent!');
  
      }

    return(
     <div>
    <div class="nav">
    <Link to={"/"}>Home</Link>
    <Link to={"/Fastfashion"}>Fast Fashion</Link>
    <Link to={"/Foodinsecurity"}>Food Insecurity</Link>
    <Link to={"/Chat"}>Chat with us!</Link>
    </div>
    <h1>Hello! wanna chat with us about how to make the world more sustainable??? We are first going to need your number:</h1>
    <form><label for="number"> Enter your number below (please at country code to the beginning):</label><br></br>
    <input type="text" id="phone" name="phonenum"></input>
    <button onClick={message}>Let's Chat</button>
    </form>
    <h3>Perfect, Let's get this convo started!</h3>
     </div>  
 
 
 
 
 );


}
export default Chat;