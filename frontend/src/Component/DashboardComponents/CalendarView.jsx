import React from 'react';
import '../../Styles/CalendarView.css';

const CalendarView = () => {
  // Calendar data
  const days = [
    { day: 'MON', date: 25, times: ['10:00', '11:00', '12:00'] },
    { day: 'TUE', date: 26, times: ['08:00', '09:00', '10:00'] },
    { day: 'WED', date: 27, times: ['12:00', '—', '13:00'] },
    { day: 'THU', date: 28, times: ['10:00', '11:00', '—'] },
    { day: 'FRI', date: 29, times: ['—', '14:00', '16:00'] },
    { day: 'SAT', date: 30, times: ['12:00', '14:00', '15:00'] },
    { day: 'SUN', date: 31, times: ['09:00', '10:00', '11:00'] },
  ];

  const appointments = [
    { title: 'Dentist', time: '09:00 - 11:00', doctor: 'Dr. Cameron Williamson' },
    { title: 'Physiotherapy', time: '11:00 - 12:00', doctor: 'Dr. Kevin Djones' },
  ];

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