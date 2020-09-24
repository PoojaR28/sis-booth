import React, { useState } from "react";
import MonthExpense from "./MonthExpense";
import MonthList from "./MonthList";
import Subnav from "./SubNavigation";

export default function ExpenseNotification() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(newExp) {
    console.log(newExp);
    setExpenses((prevNotes) => {
      return [...prevNotes, newExp];
    });
  }

  function deleteExp(id) {
    setExpenses((prevNotes) => {
      return prevNotes.filter((nodeItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Subnav />

      <h3 style={{ textAlign: "center", color: "green", margin: "20px" }}>
        Please enter your Monthly Expense here!! You can enter and delete your
        expenses...
      </h3>

      <MonthExpense onAdd={addExpense} />
      <h1 style={{ textAlign: "center", color: "#9e9e9e", margin: "20px" }}>List of Expenses</h1>
      <table style={{width: "1000px", alignItems:"center", textAlign:"center"}}>

      <tr style={{ color: "red" }}>
          <th>Month </th>
          <th>Amount </th>
        </tr>
        
        {expenses.map((Item, index) => {
          return (
            // <MonthList
            //   key={index}
            //   id={index}
            //   date={Item.date}
            //   amount={Item.amount}
            //   onDelete={deleteExp}
            // />
            <>
            <tr>
            <th>{Item.date} </th>
            <th>{Item.amount} </th>
            <th><button onClick={()=>deleteExp(index)}>Delete</button></th>
            </tr>
            </>
          );
        })}
                    
                    </table>

    </div>
  );
}
