import { useEffect, useState } from 'react';
import { getAppointments, deleteAppointment, updateAppointment } from '../services/api';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: '', email: '', date: '', time: '' });

  // Fetch appointments from API
  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await getAppointments();
      setAppointments(response.data);
    };

    fetchAppointments();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id);
      setAppointments(appointments.filter((appointment) => appointment.id !== id));
    } catch (error) {
      console.error('Error deleting appointment', error);
    }
  };

  // Handle edit form submission
  const handleEditSubmit = async (id) => {
    try {
      await updateAppointment(id, editData);
      setAppointments(appointments.map(app => app.id === id ? { ...app, ...editData } : app));
      setEditingId(null); // Reset editing state
    } catch (error) {
      console.error('Error updating appointment', error);
    }
  };

  // Handle edit button click
  const handleEditClick = (appointment) => {
    setEditingId(appointment.id);
    setEditData({
      name: appointment.name,
      email: appointment.email,
      date: appointment.date,
      time: appointment.time
    });
  };

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {editingId === appointment.id ? (
              <form onSubmit={() => handleEditSubmit(appointment.id)}>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                />
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                />
                <input
                  type="date"
                  name="date"
                  value={editData.date}
                  onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                />
                <input
                  type="time"
                  name="time"
                  value={editData.time}
                  onChange={(e) => setEditData({ ...editData, time: e.target.value })}
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                {appointment.name} - {appointment.email} - {appointment.date} at {appointment.time}
                <button onClick={() => handleEditClick(appointment)}>Edit</button>
                <button onClick={() => handleDelete(appointment.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
