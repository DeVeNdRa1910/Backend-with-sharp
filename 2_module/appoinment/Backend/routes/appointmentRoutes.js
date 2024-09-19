const express = require('express');
const {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment
} = require('../controllers/appointmentController');

const router = express.Router();

router.post('/appointments', createAppointment);    // Create
router.get('/appointments', getAppointments);       // Read
router.put('/appointments/:id', updateAppointment); // Update
router.delete('/appointments/:id', deleteAppointment); // Delete

module.exports = router;
