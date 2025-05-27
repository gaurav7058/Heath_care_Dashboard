import React from 'react';
import { FaStethoscope, FaEye, FaHeartbeat, FaBrain } from 'react-icons/fa';
import '../../Styles/UpcomingSchedule.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';
const UpcomingSchedule = () => {
  const scheduleData = [
    {
      day: 'Thursday',
      appointments: [
        { title: 'Health checkup complete', time: '11:00 AM', icon: <FaStethoscope /> },
        { title: 'Ophthalmologist', time: '14:00 PM', icon: <FaEye /> }
      ]
    },
    {
      day: 'Saturday',
      appointments: [
        { title: 'Cardiologist', time: '12:00 AM', icon: <FaHeartbeat /> },
        { title: 'Neurologist', time: '16:00 PM', icon: <FaBrain /> }
      ]
    }
  ];
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