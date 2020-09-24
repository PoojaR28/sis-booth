import React from 'react'
import { useParams } from 'react-router-dom';
import Subnav from "./SubNavigation"
import {Link} from "react-router-dom";
import SideBar from "./SideBar"
import "./button.css"


export default function Board() {
    
const {status,user,phone,email,exp,date,facebook,linkedin,instagram}=useParams();

    return (

        <div >

            <Subnav userName={user}/>
            
            <div className="container">
<button type="button" class="btn" ><Link to={`/Login/${user}`} class="nav-link" ><h6>Chat with your friends</h6></Link> </button>
{/* <button type="button"><Link to={`/Profile/${status}/${userName}/${phone}/${email}/${title}/${company}/${location}`} class="nav-link" >View your profile</Link></button> */}
{/* <Link to={`/Login/${email}`} class="nav-link" >Chat with your friends</Link> */}

<SideBar 
status={status}
userName={user}
phone={phone}
email={email}
exp={exp}
date={date}
facebook={facebook}
linkedin={linkedin}
instagram={instagram}
/>
{/* <SideBar/> */}
         </div>
        
        </div>
    );
}
