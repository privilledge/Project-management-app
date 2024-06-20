import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import React, { useState } from "react";

import CalendarSetup from "./CalendarSetup";

function Calendar() {
  return (
    <>
      <Sidebar />
      <div className="main-content " style={{ backgroundColor: "#ffffff" }}>
        <TopBar />
        <CalendarSetup />
      </div>
    </>
  );
}
export default Calendar;
