import React from 'react';
import "../Styles/UpcomingSchedule.css"
const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="appointment-card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-time">{time}</p>
      </div>
      <div className="status-indicator"></div>
    </div>
  );
};

export default SimpleAppointmentCard;