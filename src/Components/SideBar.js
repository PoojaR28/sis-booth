import React from 'react'
import Board from "./Board"
// import Login from "./Login"
import Profile from './Profile'
import List from './List'

export default function SideBar(props) {
    return (
        <div>
             <div class="row">
  <div class="col-2">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"  aria-selected="true">Board</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"  aria-selected="true">Report</a>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"  aria-selected="true">ToDoList</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="true">Profile</a>

    </div>
  </div>
  <div class="col-10">
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" ><Board/></div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" >Report Your day to day activities here</div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" ><List/></div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel">
        <Profile 
        status={props.status}
        userName={props.userName}
        phone={props.phone}
        email={props.email}
        exp={props.exp}
        date={props.date}
        />
        </div>

    </div>
  </div>
</div>
    </div>

    )
}
