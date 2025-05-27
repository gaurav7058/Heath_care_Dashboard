import React from 'react';
import "../Styles/UpcomingSchedule.css"
import SimpleAppointmentCard from './SimpleAppointmentCard';
import {scheduleData} from "../Data/appointment.jsx";
const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <h2 className="schedule-main-title">The Upcoming Schedule</h2>
      
      {scheduleData.map((daySchedule, index) => (
        <div key={index} className="day-schedule-section">
          <h3 className="day-header">On {daySchedule.day}</h3>
          <div className="appointments-grid">
            {daySchedule.appointments.map((appointment, idx) => (
              <SimpleAppointmentCard
                key={idx}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;