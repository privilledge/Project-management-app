import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarSetup = () => {
  const events = [
    {
      title: "Jogging",
      start: new Date(2024, 5, 26, 7, 0), // months are 0-indexed in JavaScript Date
      end: new Date(2024, 5, 26, 8, 0),
      allDay: false,
    },
    {
      title: "Meeting notes",
      start: new Date(2024, 6, 27, 7, 0),
      end: new Date(2024, 6, 27, 8, 0),
      allDay: false,
    },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarSetup;
