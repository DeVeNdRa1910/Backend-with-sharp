const Expense = require('../models/expenseModel');

// Create new expense
exports.createExpense = async (req, res) => {
  try {
    const { title, amount, date, description } = req.body;
    const expense = await Expense.create({ title, amount, date, description });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update expense
exports.updateExpense = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, amount, date, description } = req.body;
  
      // Find expense by ID and update it
      const expense = await Expense.findByPk(id);
      if (!expense) return res.status(404).json({ message: 'Expense not found' });
  
      expense.title = title;
      expense.amount = amount;
      expense.date = date;
      expense.description = description;
      await expense.save();
  
      res.status(200).json(expense);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
// Get expense by ID
exports.getExpenseById = async (req, res) => {
    try {
      const { id } = req.params;
      const expense = await Expense.findByPk(id);
      if (!expense) return res.status(404).json({ message: 'Expense not found' });
      res.status(200).json(expense);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  