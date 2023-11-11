import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiFillMinusCircle} from 'react-icons/ai'

import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.currency}{props.cost}</td>
        <td><AiFillPlusCircle  color='green' size = "2.5rem" onClick={event=> increaseAllocation(props.name)}></AiFillPlusCircle></td>
        <td><AiFillMinusCircle color='red'   size = "2.5rem" onClick={event=> decreaseAllocation(props.name)}></AiFillMinusCircle></td>
        <td><TiDelete size='2.9rem' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;