const express = require('express');
const bodyParser = require('body-parser');
const appointmentRoutes = require('./routes/appointmentRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

app.use('/api', appointmentRoutes);

sequelize.sync().then(() => console.log('Database synced'));

module.exports = app;
