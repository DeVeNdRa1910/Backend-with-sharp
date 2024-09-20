import React, { useState } from 'react';
import axios from 'axios';

function AddExpense() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expense = { title, amount, date, description };
    await axios.post('http://localhost:5000/api/expenses', expense);
    setTitle('');
    setAmount('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;
