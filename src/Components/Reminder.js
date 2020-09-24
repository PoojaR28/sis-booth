import React, { Component } from 'react'
import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule'

export default class Reminder extends Component {
     
   render() {
        return (
            
                <ScheduleComponent currentView='Month' >
                    
                <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
                </ScheduleComponent>
           
        )
    }
}
