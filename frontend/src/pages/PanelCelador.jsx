import React from 'react'
import { Link} from 'react-router-dom'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timegridPlugin from '@fullcalendar/timegrid'

export default function PanelCelador() {
   

  return <>
    
    <FullCalendar plugins={[ dayGridPlugin,timegridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          start:"today prev,next",
          center: 'title',
          end: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        events={[
          {
            title:'celador',
            start: '2023-13-10T10:00:00',
            end: '2023-13-10T04:00:00',
            display: 'background'
          }
        ]}
        
        />
    
    </>
  
}
