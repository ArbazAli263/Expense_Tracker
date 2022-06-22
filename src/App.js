import React, {useState} from 'react';

import NewExpense from './Components/NewExpense/NewExpense';

import Expenses from './Components/Expenses/Expenses';

let DUMMY_EXPENSE = [
  {
    id:'e1',
    title:'School fee',
    amount:300,
    date:new Date(2021,5,12)
  },
  {
    id:'e2',
    title:'Books',
    amount:250,
    date:new Date(2021,2,22)
  },
  {
    id:'e3',
    title:'House rent',
    amount:700,
    date:new Date(2021,4,2)
  },
  {
    id:'e4',
    title:'Food',
    amount:500,
    date:new Date(2021,5,5)
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  

  const addExpenseHandler = (expense) => {
    
    const updatedExpense= [expense, ...expenses];
    setExpenses(updatedExpense);


  };
  return (
         <div>
           <NewExpense onAddExpense={addExpenseHandler}/>
           <Expenses item={expenses} />
           
         
          </div>
  );
}


export default App;