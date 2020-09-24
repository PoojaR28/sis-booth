import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Budget from "./Components/Budget";
import SignUp from "./Components/SignUp";
import Card from "./Components/Card";
import Button from "./Components/Button"
import Login from "./Components/Login"
import FirstPage from './Components/FirstPage';
import AddReminder from "./Components/AddReminder"
import Profile from './Components/Profile';
import MonthExpense from "./Components/MonthExpense";
import ExpenseNotification from './Components/ExpenseNotification';
import MonthList from './Components/MonthList';


function App(props) {
  return (
    <div> 
       <Router>
       <Switch>
       <Route exact path="/"><FirstPage/></Route>
       <Route  path="/Budget"><Budget/></Route>
       <Route  path="/Signup"><SignUp/></Route>
       <Route  path="/Card/:status/:user/:phone/:email/:exp/:date/:facebook/:linkedin/:instagram"><Card/></Route>
       <Route  path="/Login/:userName"><Login/></Route>
       <Route  path="/AddReminder"><AddReminder/></Route>
       {/* <Route  path="/Profile/:status/:userName/:phone/:email/:title/:company/:location"><Profile/></Route> */}

       {/* <Route  path="/Button/:userName"/> */}
       <Route  path="/Profile"><Profile/></Route>
       <Route  path="/Button/:status/:user/:phone/:email/:exp/:date/:facebook/:linkedin/:instagram"><Button/></Route>
       <Route  path="/Button"><Button/></Route>
       <Route  path="/MonthExpense"><MonthExpense/></Route>
       <Route  path="/ExpenseNotification"><ExpenseNotification/></Route>
       <Route  path="/MonthList"><MonthList/></Route>
       <Route  path="/Card"><Card/></Route>


       </Switch>
          </Router>
  </div>
  );
}

export default App;
