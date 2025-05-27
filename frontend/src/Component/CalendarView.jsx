import React from 'react';
import '../Styles/CalendarView.css';
import {days,appointments} from "../Data/calender.js"
const CalendarView = () => {
  // Calendar data
  

  return (
    <div className="calendar-view-container">
      <div className="calendar-header">
        <h2>October 2021</h2>
      </div>

      <div className="calendar-grid">
        {days.map((day, index) => (
          <div key={index} className="calendar-day">
            <div className="day-header">
              <span className="day-abbr">{day.day}</span>
              <span className="day-number">{day.date}</span>
            </div>
            <div className="time-slots">
              {day.times.map((time, timeIndex) => (
                <div 
                  key={timeIndex} 
                  className={`time-slot ${time === '—' ? 'empty-slot' : ''}`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointments-container">
        <h3 className="appointments-title">Scheduled Appointments</h3>
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-card">
            <div className="appointment-time-badge">
              {appointment.time}
            </div>
            <div className="appointment-details">
              <h4 className="appointment-title">{appointment.title}</h4>
              <p className="appointment-doctor">{appointment.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;