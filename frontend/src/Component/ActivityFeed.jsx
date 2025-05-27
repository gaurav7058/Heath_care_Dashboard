import '../Styles/ActivityFeed.css';
import React from 'react';

const ActivityFeed = () => {
  // Sample data for the chart
  const chartData = [
    { day: 'Mon', appointments: 3 },
    { day: 'Tues', appointments: 1 },
    { day: 'Wed', appointments: 4 },
    { day: 'Thurs', appointments: 2 },
    { day: 'Fri', appointments: 5 },
    { day: 'Sat', appointments: 0 },
    { day: 'Sun', appointments: 2 }
  ];

  const maxAppointments = Math.max(...chartData.map(item => item.appointments));

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <p className="activity-subtitle">3 appointments this week</p>
      </div>

      {/* Chart Container */}
      <div className="activity-chart">
        <div className="chart-bars">
          {chartData.map((item, index) => (
            <div key={index} className="chart-bar-container">
              <div 
                className="chart-bar"
                style={{ height: `${(item.appointments / maxAppointments) * 100}px` }}
              >
                <span className="bar-value">{item.appointments}</span>
              </div>
              <span className="bar-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Days Grid */}
      <div className="days-grid">
        {chartData.map((item) => (
          <div key={item.day} className="day-pill">
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;