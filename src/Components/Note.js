import React,{useState} from 'react'
import "./note.css"

export default function Note(props) {

    const [category,setCategory]=useState("");

        // function handleChange(event) {
        //     setCategory({category: event.target.value});
        //   }

          function submitChange(event){
              event.preventDefault();
          }

          function handleDelete(){
              props.onDelete(props.id);
          }

    return (
        <div class="note">
             <form onSubmit={submitChange}>
            <p>Created by {props.creator}</p>
            <h5>Scheduled interview of <u>{props.candidate} </u>by <u>{props.client}</u> on<u> {props.date}</u></h5>
       
          <strong>Progress:</strong>

          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="" selected disabled hidden>Choose here</option>
            <option value="Scheduled">Scheduled</option>
            <option value="In Progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleDelete}>Delete</button>
          <br/>
          <p >Status:<strong>{category}</strong></p>
          </form>
        </div>
    )
}
