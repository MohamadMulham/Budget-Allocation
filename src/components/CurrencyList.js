import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';


const CurrencyList = () =>{
    const {dispatch} = useContext(AppContext);
    const handleCurrencyChange = (event)=>{
        console.log('mekuku', event.target.value)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value, 
        });

    }


    return(
        <div>
                    <select className="alert alert-success"  id="inputGroupSelect01" onChange={(event) => handleCurrencyChange(event)}>
                        <option className='' defaultValue value= "£" name="">Currency(£ Pound)</option>
                        <option className='' value= "$" name="">Currency($ Dollars)</option>
                        <option className='' value= "€" name="">Currency(€ Euro )</option>
                        <option className='' value= "₹" name="">Currency(₹ Ruppee)</option>
                    </select>
        </div>

    );
        


};


export default CurrencyList;

