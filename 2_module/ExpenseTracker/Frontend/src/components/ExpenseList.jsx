import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await axios.get('http://localhost:5000/api/expenses');
      setExpenses(response.data);
    };
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title} - {expense.amount} - {expense.date}
          <button onClick={() => handleDelete(expense.id)}>Delete</button>
          <Link to={`/edit-expense/${expense.id}`}>Edit</Link> {/* Add this link */}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
