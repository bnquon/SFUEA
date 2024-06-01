import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

export const BasicCalendar = () => {

  type Events = {
    title: string;
    picture: string;
}

  const events = [
    {
      title: 'League In-house',
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
    }
  ]

  return (
    <div className='h-screen w-screen flex flex-col gap-10 justify-center items-center relative'>

      <h1 className="w-4/5 text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">EVENT SCHEDULE.</h1>

      <div className='w-4/5 h-[75%]'>
          <Calendar
          events={events}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          length={1}
          />
      </div>
    </div>
  )
}
