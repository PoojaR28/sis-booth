import React from 'react'

export default function MonthList(props) {

    // function submitChange(event){
    //     event.preventDefault();
    // }

    function handleDelete(){
        props.onDelete(props.id);
    }

    return (
        <div>
            {/* <div class="container">
        <div class="row justify-content-md-center"> */}

            
        
        
           
            <th>{props.date} </th>
            <th>{props.amount} </th>
            <th>          <button onClick={handleDelete}>Delete</button></th>



        </div>
       
    )
}
