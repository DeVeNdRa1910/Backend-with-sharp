const express = require('express');
const { createExpense, getAllExpenses, deleteExpense } = require('../controllers/expenseController');
const router = express.Router();

router.post('/expenses', createExpense);
router.get('/expenses', getAllExpenses);
router.delete('/expenses/:id', deleteExpense);
router.put('/expenses/:id', updateExpense);
router.get('/expenses/:id', getExpenseById);
module.exports = router;
