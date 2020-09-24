import React, { useState } from "react";
import { uuid } from "uuidv4";
import Alert from "./Alert";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./budget.css";
import Subnav from "./SubNavigation";
import {Link} from "react-router-dom";



const initialExpenses = [];

console.log(initialExpenses);

function Budget() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = {
        id: uuid(),
        charge: charge,
        amount: amount,
      };
      setExpenses([...expenses, singleExpense]);
      setCharge("");
      setAmount("");
      handleAlert({type:"success",text:"Item Added!!"});
    } else {
      //handle alert            
      handleAlert({type:"danger",text:`charge cannot be empty and amount should not be 0`});
    }
  };

const clearList=()=>{
  //console.log("Clear all items");
  setExpenses([]);
}

const handleDelete=(id)=>{
  // console.log(`item deleted:${id}`);
  let TempExpenses=expenses.filter(item=>item.id !== id);
  setExpenses(TempExpenses);
  handleAlert({type:"danger",text:"Item Deleted"})
}

  return (
    <>
        <Subnav/>

      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1 className="text-center">Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList 
        expenses={expenses} 
        handleDelete={handleDelete}
        clearList={clearList}
        />
      </main>
      <h1>
        Total Expenses:{" "}
        <span className="total">
          Rs
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}

        </span>
      </h1>

    </>
  );
}

export default Budget;
