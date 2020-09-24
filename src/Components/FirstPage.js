import React from 'react'
import Navigation from "./Navigation";
import "./Signin.css";
import {Link} from "react-router-dom";
import "./firstpage.css";

export default function FirstPage() {
    return (
      <div  >
 
 <Navigation/>
      
 <section class="landing">
   <div class="dark-overlay">
     <div class="landing-inner">
       <h1 class="x-large">SISTM</h1>
       <h3 class="large">Let you work more collaboratively and get more work done.</h3>
       <p class="lead">Sistm's boards and lists enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
       <div class="buttons">
       <Link to="/Card" class="btn btn-white text-primary" >Start doing</Link>         
         </div>
         </div>
         </div>
         </section>
    </div>

        

    );
}
