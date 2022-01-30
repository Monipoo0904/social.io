import React from 'react';
// import logo from './logo.svg';
import './home.css';

import {Link} from "react-router-dom";


function Home() {
  return (
    <div>
    <head>
  {/* <title>Home</title>  */}
  {/* <link rel="stylesheet" type = "text/css" href="index.css"> */}
  <h1 class="head">Welcome to SocialIo, the place to educate yourself on the social issues of the world</h1>
  </head>
    <div class="nav">
    <Link to={"./Home"}>Home</Link>
    <Link to={"./Fastfashion"}>Fast Fashion</Link>
    <Link to={"./Foodinsecurity"}>Food Insecurity</Link>
  </div>

<h2>About us</h2>
<p>SocialIo is an organization that is created based upon the awareness of catastrophic social issues today and the affects these issues have upon us. We believe that education upon these issues is the only way that real change can come about.</p>

<p>From this page, you can<Link to ={"./Fastfashion"}> learn about fast fashion</Link> or you can 
<Link to={"./Foodinsecurity"}> learn about food insecurity</Link></p>

</div>









  );
}

export default Home;
