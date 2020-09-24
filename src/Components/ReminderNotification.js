import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";


export default function ReminderNotification() {
  const [notes,setNotes]=useState([]);

  function addNote(newNote){
    console.log(newNote);
    setNotes(prevNotes=>{
      return [...prevNotes,newNote]
    });
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((nodeItem,index)=>{
        return index!==id;
      });
      
    })
  }
  return (
    <div>
    Please enter your reminder here!! You can enter update and delete your reminders...

    <div class="row">
  <div class="col-lg-6">
    
    <CreateArea onAdd={addNote}/>
    </div>
  <div class="col-lg-6">
    {notes.map((noteItem,index) => {
      return <Note
      key={index}
      id={index}
      creator={noteItem.creator}
      candidate={noteItem.candidate}
      client={noteItem.client}
      date={noteItem.date}
onDelete={deleteNote}
      />

    })}
    </div>
</div>
</div>
  );
}




