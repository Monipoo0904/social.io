import React from 'react';
import './foodinsecurity.css';

import {Link} from "react-router-dom";

function Foodinsecurity() {
  return (
    <div>
 <head>



    <title>Food Insecurity</title>
    </head>
    
  <div class="nav">
    <Link to={"/"}>Home</Link>
    <Link to={"/Fastfashion"}>Fast Fashion</Link>
    <Link to={"/Foodinsecurity"}>Food Insecurity</Link>
    <Link to={"/Chat"}>Chat with us!</Link>
  </div>


    <h1 class="headtext">Food Insecurity </h1>


  
    <body>
    <h2>Did you know:</h2>

    <p>"That more than 38 million people, including 12 million children face food insecurity in the United States"?</p>

    <h3>What causes food insecurity?</h3>
    <ul>
        <li>unenployment</li>
        <li>poverty</li>
        <li>low income</li>
        <li>lack of affordable housing</li>
        <li>chronic health conditions and lack of access to healthcare</li>
        <li>sytemic racsism and racial discrimination</li>
    </ul>


    <h2> Resources to learn more and to make a change: </h2>
    <p>Click any photo to access resources!</p>

<a class="img" href="https://www.feedingamerica.org/hunger-in-america/food-insecurity">
    <img alt="hunger hands" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.Za4Ze2ksGfOh60IQuatr-wHaE8%26pid%3DApi&f=1" width="300" height="150"/>
</a>

<a class="img" href="https://sentientmedia.org/food-insecurity/">
    <img alt="hunger hands" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6VONAKpCH6YlzuyQ9JQL_AHaE7%26pid%3DApi&f=1" width="270" height="165"/>
</a>

<a class="img" href="https://www.gao.gov/blog/addressing-food-insecurity-america%2C-and-during-pandemic">
    <img alt="hunger hands" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Ziv5Ff3GjRTnX1ACK4JQSQHaE8%26pid%3DApi&f=1" width="270" height="165"/>
</a>

<a class="img" href="https://www.npr.org/2020/09/27/912486921/food-insecurity-in-the-u-s-by-the-numbers">
    <img alt="hunger hands" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ueThZtqGzR0Ax1NNu9n1VAHaEN%26pid%3DApi&f=1" width="270" height="165"/>
</a>




<p>If you or someone you know are struggling with food insecurity, please click on the photo below to find assistance.</p>
<a class="img" href="https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program">
    <img alt="hunger hands" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Eo4Ilw8UHe-1H7NIbxNIowHaDt%26pid%3DApi&f=1" width="300" height="150"/>
</a>

</body>
    {/* <!-- https://www.feedingamerica.org/hunger-in-america/food-insecurity --> */}


    {/* <!-- 
        1.) take info to customize page
        2.) style with css
        3.) background photo???
     --> */}

</div>



  );
}

export default Foodinsecurity;
