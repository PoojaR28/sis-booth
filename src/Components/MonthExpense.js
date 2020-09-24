import React, { useState } from "react";

export default function MonthExpense(props) {
    const [list, setList] = useState({
        date:"",
        amount:""
    });

    function handleChange(event){
        const {name,value}=event.target;
        
        setList(prevList =>{
            return{
                ...prevList,
                [name]:value
            }
                
            
        });
        }

        function handleSubmit(event){
            event.preventDefault();
           
            setList({
             
              date:"",
              amount:""
          
            })
            props.onAdd(list);

        }

  return (
    <div >
      <h1 className="text-center">Monthly Expenses</h1>
      {/* <div class="container">
        <div class="row justify-content-md-center"> */}
          <table style={{ width: "1000px", alignItems:"center", textAlign:"center"}}>
            <tr >
              <td>
                <h4>Select the month and year</h4>
              </td>
              <td>
                <h4>Total Expense</h4>
              </td>
            </tr>
            <tr>
              <th>
                <input
                  type="month"
                  name="date"
                  spellCheck="false"
                  autoComplete="false"
                  value={list.date}
                 onChange={handleChange}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="amount"
                  value={list.amount}
                  onChange={handleChange}
                />
              </th>
              <th>
                <button 
                type="button" 
                onClick={handleSubmit}
                >
                  Submit
                </button>
              </th>
            </tr>
          </table>
        </div>
    //   </div>
    // </div>
  );
}
