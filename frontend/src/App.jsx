import React from 'react'
import Dashboard from './Component/DashboardMainContent '
import Nabar from './Component/Nabar'
import Sidebar from './Component/Sidebar'
import Home from './pages/Home'
import "./App.css"
const App = () => {
  return (
    <div>
      <Nabar></Nabar>
      <div className="main-content">
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
      </div>
    </div>
  )
}

export default App
