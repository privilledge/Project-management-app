import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
  return (
    <>
      <Sidebar />
      <div className="main-content " style={{ backgroundColor: "#f1f1f2" }}>
        <TopBar />
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "Event 1", date: "2024-06-01" },
            { title: "Event 2", date: "2024-06-02" },
          ]}
        />
      </div>
    </>
  );
}
export default Calendar;
