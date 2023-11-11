import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget,currency, dispatch, expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if(event.target.value >20000){
            event.target.value = 20000;
            alert('You cannot set the Budget to be over 20,000');
        }
        else if(event.target.value < totalExpenses){
            event.target.value = budget;
            alert('You cannot set the Budget to be lower than the costs. Please Lower the costs.');
        }

        setNewBudget(event.target.value);
        dispatch({
            type:"SET_BUDGET",
            payload: event.target.value,
        })
        
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                pattern="[0-9]"
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}>    
            </input>
        </div>
            );
};
export default Budget;