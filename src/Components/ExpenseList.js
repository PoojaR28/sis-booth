import React from 'react'
import ExpenseItem from './ExpenseItem'
import {MdDelete} from "react-icons/md"


const ExpenseList = ({expenses,handleDelete,clearList}) => {
return (
        <div>
<ul className="list-group my-5">
            <h3 className="text-primary">Expenses:</h3>
            
            {expenses.map((expense)=>{
                    return <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDelete} />;
})}
               

            </ul>
            {expenses.length>0 && ( 
           <button className="btn" onClick={clearList}>
               Clear Expenses
               <MdDelete className="btn-icon"/>
               </button>
           )}

</div>

    )
}

export default ExpenseList;
