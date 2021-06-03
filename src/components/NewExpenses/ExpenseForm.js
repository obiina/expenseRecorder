import React from 'react';
import './ExpenseForm.css';
import {useState} from 'react';
import NewExpenses from './NewExpenses';

const ExpenseForm = (props) =>{
    const [changedTitle, setChangedTitle] = useState('');
    const [changedamount, setChangedamount] = useState('');
    const [changedDate, setChangedDate] = useState('');

    const titleChangeHandler = (event) => {
        setChangedTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setChangedamount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setChangedDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); 
    const expenseData = {
        title: changedTitle,
        amount: +changedamount,
        date: new Date(changedDate)
    };

    props.onSaveExpenseData(expenseData);
    setChangedDate('');
    setChangedTitle('');
    setChangedamount('');

    }


    
return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={changedTitle} onChange={titleChangeHandler}/>                
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={changedamount} onChange={amountChangeHandler}/>                
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={changedDate} onChange={dateChangeHandler}/>                
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.cancelForm}>Cancel</button>
            </div>
        </form>
    
);
}
export default ExpenseForm;