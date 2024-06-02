import React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export const BasicCalendar = () => {

  type Events = {
    title: string;
    picture: string;
  }

  const events = [
    {
      title: 'League In-house',
      start: moment("2024-06-01T11:00:00").toDate(),
      end: moment("2024-06-01T12:00:00").toDate(),
    }
  ];

  return (
    <div className='h-[100vh] w-screen flex flex-col gap-10 justify-center items-start relative bg-[silver] pl-[12.5vw]'>
      <h1 className="w-3/4 text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">
        EVENT SCHEDULE.
      </h1>

      <div className='w-3/5 h-3/4 relative'>
        <Calendar
          events={events}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
}
