import React from 'react'
import {Link} from "react-router-dom";
import "./subnav.css"

export default function SubNavigation(props) {
    return (
//         <div>
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="nav-link disabled" href="#" aria-disabled="true">StaffIT Solutions</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Board <span class="sr-only">(current)</span></a>
//       </li>
//     </ul>
//     <ul class="nav navbar-nav navbar-right">
//       <li><a href="#"><span class="glyphicon glyphicon-user"></span> {props.email}</a></li>
//     </ul>

//   </div>
// </nav>
//         </div>

 <div className="imgcontainer">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <img src={process.env.PUBLIC_URL + "sistm.png"} width="30" height="30" class="d-inline-block align-top" alt="logo" loading="lazy"></img>
    
        <Link to="/" class="navbar-brand brand-name" >SISTM</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> 
    
        <div class="collapse navbar-collapse" id="navbarsExample07XL">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/Button" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/Budget" class="nav-link" >Budget</Link>
            </li>
            <li class="nav-item">
              <Link to="/ExpenseNotification" class="nav-link" >Monthly Expense</Link>
            </li>
            </ul>
            <div class="right-side">
          <ul class="nav navbar-nav navbar-right">
          <span class="navbar-text">
     {props.userName}
    </span>
          <li class="nav-item">
            <Link to="/" class="nav-link btn btn-sm btn-outline-secondary signout">Signout</Link>
          </li>
        </ul>
        </div>
        </div>
    </nav>
 </div> 
    )
}
