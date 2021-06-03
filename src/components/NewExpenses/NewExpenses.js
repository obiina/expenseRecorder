import React, {useState} from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
const NewExpenses = (props) =>{
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseData = (savedData) => {
        const expenseData = {
                ...savedData,
                id: Math.random.toString()
        };


        props.onAppHandler(expenseData);
        setIsEditing(false);
    }



    const displayExpense = (event) => {
        event.preventDefault();
       setIsEditing(true);
    }


    const onCancel = (props) => {
        setIsEditing(false);
    }
return(
    
    <div className="new-expense">
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} cancelForm={onCancel}/>}
        {!isEditing && <button type="submit" onClick={displayExpense}>Add New Expense</button>}
    </div>
);
}

export default NewExpenses;