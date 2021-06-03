import logo from './logo.svg';
import './App.css';
import Expenses from '../src/components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
import dummyexpenses from './components/Expenses/dummyexpenses';
import {useState} from 'react';

function App(props) {
const [expenses, setExpenses] = useState(dummyexpenses);


const getExpensesApp = (expense) => {
  setExpenses((prevExpense)=> {
    return[expense, ...expenses];
  })
}

  return (
    <div className="App">
      <NewExpenses onAppHandler={getExpensesApp}/>
       <Expenses items ={expenses}/>
    </div>
  );
}

export default App;
