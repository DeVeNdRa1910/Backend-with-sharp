import React from 'react';
import AddExpense from '../components/AddExpense';
import ExpenseList from '../components/ExpenseList';

function HomePage() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <AddExpense />
      <ExpenseList />
    </div>
  );
}

export default HomePage;
