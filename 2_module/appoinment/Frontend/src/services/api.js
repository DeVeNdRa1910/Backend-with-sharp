import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Create appointment
export const createAppointment = (data) => api.post('/appointments', data);

// Get all appointments
export const getAppointments = () => api.get('/appointments');

// Update appointment
export const updateAppointment = (id, data) => api.put(`/appointments/${id}`, data);

// Delete appointment
export const deleteAppointment = (id) => api.delete(`/appointments/${id}`);

export default api;
