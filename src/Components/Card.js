import React,{ useState} from 'react'
import {Link} from "react-router-dom";
import "./card.css"
import Navigation from "./Navigation";
import { useParams } from 'react-router-dom';

export default function Card() {
  const {status,user,phone,email,exp,date,facebook,linkedin,instagram}=useParams();

    
    const [userName,setuserName]= useState('');
    const [password,setPassword]=useState('');
// const [isChecked,setChecked]=useState(false);

    // function onChangeCheckbox(event){
    //     setChecked(true);
    // }

function validateForm() {
    return userName.length > 0 && password.length!== 0;
  }

 function handleSubmit(event) {
    event.preventDefault();

}
  

    return (
        <div>
        <Navigation/>
        <section class="container">
      <div class="alert alert-danger">
        Invalid credentials
      </div>
      <h1 class="large text-primary">Sign In</h1>
      <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
      <form class="form" onSubmit={handleSubmit}>
        <div class="form-group">
          <input type="text" placeholder="Enter your User Name" name="userName" value={userName} onChange={e => setuserName(e.target.value)} required=""/>
        </div>
        <div class="form-group">
        <input type="password"  placeholder="Enter your password" class="form-control" required="" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <Link to={`/Button/${status}/${user}/${phone}/${email}/${exp}/${date}/${facebook}/${linkedin}/${instagram}}`}><button class="btn btn-info btn-block my-4" type="submit" disabled={!validateForm()}>Sign in</button></Link>
      </form>
      <p class="my-1">
        Don't have an account? <Link to="/Signup">Register</Link>
      </p>
    </section>

    </div>   
       
         
       );
   }



       