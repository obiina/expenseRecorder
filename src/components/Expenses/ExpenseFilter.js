import {useState} from 'react';
import React from 'react';
import Expenses from './Expenses';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {    
const onchangeFilter = (event) => {
    props.expenseDateFilter(event.target.value)
};

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={onchangeFilter}>
            {props.propDate.map(expense => <option value={expense.date.getFullYear()}>{expense.date.getFullYear()}</option>)}
          {/* <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>*/
          <option value='2019'>2019</option> }
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;