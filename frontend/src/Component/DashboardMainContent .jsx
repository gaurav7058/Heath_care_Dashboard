import React from 'react';
import '../Styles/Dashboard.css';
import { Activity, HeartPulse, Stethoscope, UserPlus } from 'lucide-react';
import "../Styles/Dashboard.css"
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import ActivityFeed from './ActivityFeed';
import UpcomingSchedule from './UpcomingSchedule';
import SimpleAppointmentCard from './SimpleAppointmentCard';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardOverview></DashboardOverview>
      <CalendarView></CalendarView>
      <ActivityFeed></ActivityFeed>
      <UpcomingSchedule></UpcomingSchedule>
    </div>
  );
};

export default Dashboard;