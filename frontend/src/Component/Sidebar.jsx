import React from 'react';
import '../Styles/Sidebar.css';
import { Home, Calendar, ClipboardList, MessageSquare, Settings,History ,Phone } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <p>Genral</p>
        <ul>
          <li className="active">
            <Home size={20} />
            <span>Dashboard</span>
          </li>
          <li>
            <History size={20}></History>
            <span>Histroy</span>
          </li>
          <li>
            <Calendar size={20}></Calendar>
            <span>Calendar</span>
          </li>
          <li>
            <Calendar size={20} />
            <span>Appointments</span>
          </li>
          <li>
            <Calendar size={20} />
            <span>Statistics</span>
          </li>
          <li>
            <MessageSquare size={20} />
            <span>Chat</span>
          </li>
          <li>
            <Phone  size={20} />
            <span>Support</span>
          </li>
          <li>
            <Settings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
