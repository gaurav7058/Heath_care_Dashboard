import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import { Calendar } from 'lucide-react'
import CalendarView from './CalendarView'
import "../Styles/DashboardOverview.css"
import "../Styles/AnatomySection-HealthStatusCards.css"

const DashboardOverview = () => {
    return (
        <div className="DashboardOverview">
            {/* Dashboard heading */}
            <div className="dashboard-heading">
                <div>
                    <h1>Dashboard</h1>
                </div>
                <div className="time-period-selector">
                    <span className="time-period-label">This Week</span>
                    <select className="time-period-dropdown">
                        
                    </select>
                </div>
            </div>

            {/* Health body image and  */}

            <div className="AnatomySection-HealthStatusCards">
                <AnatomySection></AnatomySection>
                <HealthStatusCards></HealthStatusCards>
                
            </div>
        </div>
    )
}

export default DashboardOverview
