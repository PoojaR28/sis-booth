import React from 'react'
import {Link} from 'react-router-dom'
import "./profile.css"
import AddCount from "./AddCount"

export default function Profile(props) {

    return (
        <div className="profile">
           

<form >
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn  btn-primary btn-sm">
                                Change Photo
                                <input className="file" type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="profile-head">
                                    <h5 class="welcome">
                                    {props.userName}
                                    </h5>
                                    <h6 class="welcome">
                                    {props.status}
                                    </h6>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <Link to="/Signup"><button class="edit">Edit Profile</button></Link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p class="links">WORK LINK</p>
                            <a class="links" href="https://www.facebook.com/">Facebook </a><br/>
                            <a class="links" href="https://www.linkedin.com/">Linkedin </a><br/>
                            <a class="links" href="https://www.instagram.com/">instagram</a>
                            
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{props.userName}</p>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{props.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{props.phone}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{props.status}</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Title</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{props.status}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{props.exp}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Date of Join</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{props.date}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Candidates appointed:</label>
                                            </div>
                                            <div class="col-md-6">
                                            <AddCount/>
                                            </div>
                                        </div>
                                        
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>           

  
        </div>
    )
}
