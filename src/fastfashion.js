import React from 'react';
// import logo from './logo.svg';
import './fastfashion.css';

import {Link} from "react-router-dom";

function Fastfashion() {
  return (
 <div>
     <head>
    <title>Fast Fashion</title>
    <h1 class = "head">The Fast Fashion Industry</h1>
    </head>
    <div class="nav">
    <Link to={"./Home"}>Home</Link>
    <Link to={"./Fastfashion"}>Fast Fashion</Link>
    <Link to={"./Foodinsecurity"}>Food Insecurity</Link>
  </div>


    <body>
    <h2> Wait, what even is fast fashion?</h2>
    <p> Fast fashion is the rapid production and consumation of fashion that is created to meet fast-changing trends.</p>

    <h2>The Effects:</h2>
    <ul>
        <li>Fast fashion production accounts for 10% of global carbon emissions.</li>
        <li>Fast fashion is bad for water quality and supply.</li>
        <li>labor conditions inside of fast fashion factories hang on the line of completely unethical.</li>
    </ul>


    <h2> Resources to learn more and to make a change: </h2>

    <a class="img" href="https://corporatefinanceinstitute.com/resources/knowledge/other/fast-fashion/">
        <img alt="manequins" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Yr92BKoWAZdeCV3eaBpBuQHaE8%26pid%3DApi&f=1" width="270" height="165"/>
    </a>
    <a class="img" href="https://earth.org/what-is-fast-fashion/">
        <img alt="shopping bag over head" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Gk39Jgl-QX4_7Rk2_4uldQHaE8%26pid%3DApi&f=1" width="270" height="165"/>
    </a>

    <a class="img" href="https://www.ethicalconsumer.org/fashion-clothing/what-fast-fashion-why-it-problem">
        <img alt="girls shopping" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wjAx7G-Xrh6v2QS7V1UmjwHaE8%26pid%3DApi&f=1" width="270" height="165"/>
    </a>

    <a class="img" href="https://www.thegoodtrade.com/features/what-is-fast-fashion">
        <img alt="model walk" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6WP9QU1mvsVLFqy-DcIO5QHaKq%26pid%3DApi&f=1" width="250" height="270"/>
    </a>

    <a class="img" href="https://earth.org/fast-fashions-detrimental-effect-on-the-environment/">
        <img alt="no one should die for fashion" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YwmxVFXc793JgQ7nyvIH0gHaEK%26pid%3DApi&f=1" width="270" height="165"/>
    </a>

    
    </body>
 </div>







  );
}

export default Fastfashion;
