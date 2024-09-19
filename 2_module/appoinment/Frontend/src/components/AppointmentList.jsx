import React from 'react';

function AppointmentList({ appointments, onUpdate, onDelete }) {
  return (
    <ul>
      {appointments.map((appointment) => (
        <li key={appointment.id}>
          {appointment.date} - {appointment.time}
          <button onClick={() => onUpdate(appointment)}>Update</button>
          <button onClick={() => onDelete(appointment.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default AppointmentList;