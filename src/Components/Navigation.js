import React from 'react'
import "./navigation.css";
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
     

        <div className="imgcontainer">
                

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <img src={process.env.PUBLIC_URL + "sistm.png"} width="30" height="30" class="d-inline-block align-top" alt="logo" loading="lazy"></img>

    <Link to="/" class="navbar-brand brand-name" >SISTM</Link>
    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}

    <div class="collapse navbar-collapse" id="navbarsExample07XL">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link to="/Admin" class="nav-link" >Admin</Link>
        </li>
        </ul>
      <ul class="nav navbar-nav ml-auto">
      <li class="nav-item">
        <Link to="/Signup" class="nav-link btn btn-primary btn-lg active" ><span class="fas fa-user"></span> Sign Up</Link>
      </li>
      <li class="nav-item">
        <Link to="/Card" class="nav-link btn btn-lg"><span class="fas fa-sign-in-alt"></span> Login</Link>
      </li>
    </ul>
    </div>
</nav>
          
     </div>

    );
}

