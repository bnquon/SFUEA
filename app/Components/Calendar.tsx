import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

export const BasicCalendar = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center relative'>
        <div className='w-4/5 h-4/5'>
            <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            length={1}
            />
        </div>
    </div>
  )
}
