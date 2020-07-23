import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation";
import Signin from "./Components/Signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Components/Admin";
import SignUp from "./Components/SignUp";
import Card from "./Components/Card";
import Board from "./Components/Board"

function App() {
  return (
    <div> 
       <Router>
       <Navigation/>
       
      <Switch>
       <Route exact path="/"><Signin/></Route>
       <Route  path="/Admin"><Admin/></Route>

       <Route  path="/Signup"><SignUp/></Route>
       <Route  path="/Card"><Card/></Route>
       <Route  path="/Board"><Board/></Route>

       </Switch>
          </Router>
  </div>
  );
}

export default App;
