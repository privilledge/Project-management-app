import React, { useState } from "react";
import "../assets/componentsStyles/calendar.css"; // Import your CSS file for styling

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const firstDayIndex = firstDayOfMonth(year, month);
    const days = [];

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days.map((day, index) => (
      <div
        key={index}
        className={`calendar-day ${index < firstDayIndex ? "other-month" : ""}`}
      >
        {day}
      </div>
    ));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>
          <svg
            stroke="currentColor"
            fill="#fff"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
          </svg>
        </button>
        <span className="current-month">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={goToNextMonth}>
          <svg
            stroke="currentColor"
            fill="#fff"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </button>
      </div>
      <div className="calendar-days">{generateCalendarDays()}</div>
    </div>
  );
};

export default CalendarWidget;
