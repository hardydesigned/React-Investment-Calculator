import React from 'react';
import { useState } from 'react';
import CalculatedList from './CalculatedList';
import { calculateInvestmentResults } from './util/investment';

function InputCard() {
    const [ initialInvestment, setInitialInvestment ] = useState(0);
    const [ expectedReturn, setExpectedReturn ] = useState(0);
    const [ annualInvestment, setAnnualInvestment ] = useState(0);
    const [ duration, setDuration ] = useState(0);

    let errorMessage = '';

    if(duration < 0)
    {
        errorMessage = 'Bitte geben Sie eine Zahl größer 0 für die Dauer ein.';
    }
    

    let investmentListData = calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn,  duration });

    
   return (
        <>
               <div id='user-input'>
                    <section id='input-group'>
                        <div >
                            <div className='input-row'>
                                <label >Startkapital</label>
                                <input defaultValue={initialInvestment} onChange={event => setInitialInvestment(parseFloat(event.target.value))} type="number" required/>
                            </div>
                            <div>
                                <label >Erwarteter Gewinn</label>
                                <input defaultValue={expectedReturn} onChange={event => setExpectedReturn(parseFloat(event.target.value))} type="number" required/>
                            </div>
                        </div>  
                        <div>
                            <div className='input-row'>
                                <label >Jährliches Investment</label>
                                <input defaultValue={annualInvestment} onChange={event => setAnnualInvestment(parseFloat(event.target.value))} type="number" required/>
                            </div>
                            <div>
                                <label >Dauer in Jahren</label>
                                <input defaultValue={duration} onChange={event => setDuration(parseFloat(event.target.value))} type="number" required/>
                            </div>
                        </div>
                    </section>
                                    {errorMessage !== '' && <h6 className='center'>{errorMessage}</h6>}

                </div>
                <CalculatedList calculatedListData={investmentListData} />
        </ >
    )
}

export default InputCard;