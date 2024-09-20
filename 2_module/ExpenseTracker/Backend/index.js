const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', expenseRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});
