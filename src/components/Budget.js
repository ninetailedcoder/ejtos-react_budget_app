import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, remaining, currency,dispatch } = useContext(AppContext);

  const handleBudgetChange = (e) => {
    const newBudget = parseInt(e.target.value, 10);
    
    console.log('New Budget:', newBudget);
    console.log('toal Expenses:', remaining);
    // Check if the new budget is lower than the remaining funds
    if (remaining < 0) {
      alert('Budget cannot be lower than the remaining funds. Please increase the budget.');
    } else if (!isNaN(newBudget) && newBudget <= 20000) {
      dispatch({
        type: 'SET_BUDGET',
        payload: newBudget,
      });
    } else {
      // Display an alert if the budget exceeds the limit or is not a valid number
      alert('Budget cannot exceed 20,000 or be invalid.');
    }
  };

  return (
    <div className='alert alert-secondary'>
      <label htmlFor='budget'>Budget: {currency}</label>
      <input
        type='number'
        id='budget'
        value={budget}
        onChange={handleBudgetChange}
        step={10}
        max={20000}
      />
    </div>
  );
};

export default Budget;
