import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditExpense({ match, history }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchExpense = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/expenses/${match.params.id}`);
      setTitle(data.title);
      setAmount(data.amount);
      setDate(data.date);
      setDescription(data.description);
    };
    fetchExpense();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedExpense = { title, amount, date, description };
    await axios.put(`http://localhost:5000/api/expenses/${match.params.id}`, updatedExpense);
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Update Expense</button>
    </form>
  );
}

export default EditExpense;
