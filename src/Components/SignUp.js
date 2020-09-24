import React,{useState} from 'react'
import "./signup.css"
import Navigation from "./Navigation";
import { Link } from 'react-router-dom';


export default function SignUp ()  {
   const [status,setStatus]=useState("");
  const [profile,setProfile]=useState({
    userName:"",
    phone:"",
    email:"",
    exp:"",
    date:"",
    facebook:"",
    linkedin:"",
    instagram:""
  });

function handleChange(event){
  const {name,value}=event.target;

  setProfile(prevProfile=>{
    return{
      ...prevProfile,
      [name]:value
    };
  })
}

function submitProfile(event){
  event.preventDefault();
  setProfile({
    userName:"",
    phone:"",
    email:"",
    exp:"",
    date:"",
    facebook:"",
    linkedin:"",
    instagram:""
  })

}

    return (
        <div >
                         <Navigation/>
                         <div className="container-fluid">
      <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
      <form class="form" onSubmit={submitProfile}>
        <div class="form-group">
          <select name="status" value={status} onChange={e=>setStatus(e.target.value)}>
            <option value="0">* Select Professional Status</option>
            <option value="Staffing Professional">Staffing Professional</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Team Manager">Team Manager</option>
            <option value="Other">Other</option>
          </select>
          <small class="form-text">Give us an idea of where you are at in your career</small>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Enter your userName" name="userName" value={profile.userName} onChange={handleChange} />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Enter phone Number" name="phone" value={profile.phone} onChange={handleChange} />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Enter Email Address" name="email" value={profile.email} onChange={handleChange}/>
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" name="password"/>
        </div>
        <div class="form-group">
          <input type="password" placeholder="Confirm password" name="password2"/>
        </div>
        <div class="form-group">
        <p>Add Your Job Credentials</p>
          <input type="text" placeholder="Years of Experience" name="exp" value={profile.exp} onChange={handleChange}/>
          {/* <input class="form-control" type="datetime-local" name="date"  value={profile.date} onChange={handleChange}/>    */}
          <input type="date" name="date" value={profile.date} onChange={handleChange}/>       
          </div>

        <div class="my-2">
          <button type="button" class="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        
        <div class="form-group social-input">
          <i class="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" value={profile.facebook} onChange={handleChange}/>
        </div>

        <div class="form-group social-input">
          <i class="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin" value={profile.linkedin} onChange={handleChange}/>
        </div>

        <div class="form-group social-input">
          <i class="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" value={profile.instagram} onChange={handleChange}/>
        </div>
  <Link to={`/Card/${status}/${profile.userName}/${profile.phone}/${profile.email}/${profile.exp}/${profile.date}/${profile.facebook}/${profile.linkedin}/${profile.instagram}}`}><button type="submit" className="btn ">SUBMIT</button></Link>
      </form>
      
						
      </div>
                 </div>
    );
  }
