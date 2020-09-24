import React, {useState} from 'react'
import "./createarea.css"

export default function CreateArea(props) {

const [note, setNote] = useState({
    creator:"",
    candidate:"",
    client:"",
    date:""
});

function handleChange(event){
const {name,value}=event.target;

setNote(prevNote =>{
    return{
        ...prevNote,
        [name]:value
    }
        
    
});
}

function submitNote(event){
  event.preventDefault();
  setNote({
    creator:"",
    candidate:"",
    client:"",
    date:""

  })
  props.onAdd(note);
}
    return (
              <div class="area">
            <div class="form-group row">
  <div class="col-10">
    <input  type="text" placeholder="Created By" name="creator" class="form-control" value={note.creator} onChange={handleChange}/>
  </div>
</div>

<div class="form-group row">
  {/* <label for="example-search-input" class="col-2 col-form-label">Candidate Name:</label> */}
  <div class="col-10">
    <input class="form-control" placeholder="Candidate Name" name="candidate" type="text" value={note.candidate} onChange={handleChange}/>
  </div>
</div>

<div class="form-group row">
  {/* <label for="example-email-input" class="col-2 col-form-label">Client Name:</label> */}
  <div class="col-10">
    <input class="form-control" placeholder="Client Name" name="client" type="text" value={note.client} onChange={handleChange}/>
  </div>
</div>

<div class="form-group row">
  {/* <label for="example-datetime-local-input" class="col-2 col-form-label">Date and time</label> */}
  <div class="col-10">
    <input class="form-control" type="datetime-local" name="date" value="2020-08-01T13:45:00" value={note.date} onChange={handleChange}/>
  </div>
</div>
<button type="button" class="btn btn-info btn-block" onClick={submitNote}>Add Reminder</button>
</div>
    )
}
