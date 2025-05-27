import React from 'react';
import '../Styles/Dashboard.css';
import { Activity, HeartPulse, Stethoscope, UserPlus } from 'lucide-react';
import "../Styles/Dashboard.css"
import DashboardOverview from './DashboardComponents/DashboardOverview';
import CalendarView from './DashboardComponents/CalendarView';
import ActivityFeed from './DashboardComponents/ActivityFeed';
import UpcomingSchedule from './DashboardComponents/UpcomingSchedule';
import SimpleAppointmentCard from './SimpleAppointmentCard';
const Dashboard = () => {
  return (
    <div className="dashboard">
        {/* First */}

        <DashboardOverview></DashboardOverview>

        {/* Second */}
            <CalendarView></CalendarView>
        {/* Third */}
        
        <ActivityFeed></ActivityFeed>

        
        {/* Second */}
        <UpcomingSchedule></UpcomingSchedule>
    </div>
  );
};

export default Dashboard;