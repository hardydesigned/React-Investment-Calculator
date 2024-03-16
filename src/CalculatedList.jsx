import React from 'react';
import { formatter } from './util/investment';

function CalculatedList({ calculatedListData}) {

    return (
        <>
        {calculatedListData.length === 0 ? <h4 className='center'>Bitte füllen Sie die Felder aus</h4> : (
            <table id="result">
                <thead>
                    <tr>
                        <th>Jahr</th>
                        <th>Investiertes Geld</th>
                        <th>Zinsen</th>
                        <th>Gesamte Zinsen</th>
                        <th>Gesamter Betrag</th>
                    </tr>
                </thead>
                <tbody>
                    {calculatedListData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.year}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.annualInvestment)}</td>
                                <td>{formatter.format(item.totalInterest)}</td>
                            </tr>
                        )
                    })
                                    }

                </tbody>
            </table>)
             }

        </ >
    )
}

export default CalculatedList;