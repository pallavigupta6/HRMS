// import { Button } from "bootstrap";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import style from "./Calender.module.css";
import Navbar from "../navbar/Navbar";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    // allDay: true,
    start: new Date(2022, 3, 12),
    end: new Date(2022, 3, 12),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];
function Calen() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <>
    <Navbar/>
    <div className="Calendar">
     
      <h1 style={{ textAlign: "center" }}>Calendar</h1>
      <h2 style={{ textAlign: "center" }}>Add New Event</h2>  
        
         <div> 
        <input
          type="text"
          placeholder="Add Title"
          style={{ margin: "10px", padding: "10px" }}
          className={style.addtitle}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
            
          <DatePicker
            placeholderText="Start Date"
            className={style.addtitle}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          /> 
           
          <DatePicker
            placeholderText="End Date"
            className={style.addtitle}
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          /> 
        <button style ={{marginTop:"10px"}} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px", Padding: "20px" }}
      />
    </div>
    </>
  );
}

export default Calen;
