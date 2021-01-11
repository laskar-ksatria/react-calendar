import React from 'react'
import Date from '../components/Date'
import { initialDays } from '../store'

function Calendar() {

    return (
        <div className="container pt-5">
            <div className="row">
                {initialDays.map((name, index) => {
                    return (
                        <Date key={index} dayName={name} />
                    )
                })}
            </div>
            <div className="border" style={{width: '500px', height: '200px'}}>
                
            </div>
        </div>
    )
}

export default Calendar;