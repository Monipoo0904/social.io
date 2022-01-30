import React from 'react';
// import logo from './logo.svg';
import './home.css';

import {Link} from "react-router-dom";


// const accountSid = 'ACcda42a0f050c6d614aecbb639c9323c6'; 
// const authToken = '[AuthToken]'; 
// const client = require('twilio')(accountSid, authToken);


function Home() {
  // SendMessage();
  return (


    <div>
    
  {/* <title>Home</title>  */}
  {/* <link rel="stylesheet" type = "text/css" href="index.css"> */}
  
    <div class="nav">
    <Link to={"/"}>Home</Link>
    <Link to={"./Fastfashion"}>Fast Fashion</Link>
    <Link to={"./Foodinsecurity"}>Food Insecurity</Link>
  </div>
<h1 class="head">Welcome to SocialIo, the place to educate yourself on the social issues of the world</h1>
 
<h2>About us</h2>
<p>SocialIo is an organization that is created based upon the awareness of catastrophic social issues today and the affects these issues have upon us. We believe that education upon these issues is the only way that real change can come about.</p>

<p>From this page, you can<Link to ={"./Fastfashion"}> learn about fast fashion</Link> or you can 
<Link to={"./Foodinsecurity"}> learn about food insecurity</Link></p>



</div>


  );
}


// function SendMessage(){
//   client.messages 
//   .create({ 
//      body: 'Thank you for signing up for SocialIo sustainability reminders, We are so happy you want yo help us help the planet.',  
//      messagingServiceSid: 'MG38a84eae288c245641076fb0ccd3e9c9',      
//      to: '+12405618977' 
//    }) 
//   .then(message => console.log(message.sid)) 
//   .done();

// }
export default Home;
