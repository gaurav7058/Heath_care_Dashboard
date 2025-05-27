import React, { useState } from 'react'
import Dashboard from './Component/DashboardMainContent '
import Nabar from './Component/Navbar'
import Sidebar from './Component/Sidebar'

import "./App.css"
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleBtn=()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div>
      <Nabar isSidebarOpen={isSidebarOpen} toggleBtn={toggleBtn}></Nabar>
      <div className="main-content">
        <Sidebar isSidebarOpen={isSidebarOpen}></Sidebar>
        <Dashboard></Dashboard>
      </div>
    </div>
  )
}

export default App
