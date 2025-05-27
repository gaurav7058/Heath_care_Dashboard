import { FaStethoscope, FaEye, FaHeartbeat, FaBrain } from 'react-icons/fa';

export  const scheduleData = [
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