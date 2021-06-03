import dummyexpenses from './dummyexpenses.js';
import ExpenseItems from './ExpenseItems';
import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter.js';
import {useState} from 'react';
import ExpenseChart from './ExpensesChart.js';
function Expenses (props){
    const [changedDate, setChangedDate] = useState('');
const onChangeDateFilter = (onchange) => {
setChangedDate(onchange);
// console.log(onchange);

}

const filteredExpenses = props.items.filter(expense => { 
    return expense.date.getFullYear().toString() === changedDate
    })

console.log(filteredExpenses);
    return(

        
        <div>    
        <Card className="expenses">
        <ExpensesFilter selected={changedDate} expenseDateFilter={onChangeDateFilter} propDate={props.items}/>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        {filteredExpenses.length === 0 ? <p>Oga nothing dey</p> : 
        filteredExpenses.map(expense => <ExpenseItems key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItems>)}
        
        </Card>
        </div>
    );
}


export default Expenses;