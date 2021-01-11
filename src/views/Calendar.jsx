import React from 'react';
import Date from '../components/Date';
import Days from '../components/Days'
import { initialDays } from '../store';
import { useSelector } from 'react-redux'

function Calendar() {

    //Define global var
    const { calendars } = useSelector(state => state)

    return (
        <div className="container pt-5">
            <div className="row">
                {initialDays.map((name, index) => {
                    return (
                        <Days dayName={name} key={index} />
                    )
                })}
            </div>
            <div className="border border-dark date-container">
                {calendars ? calendars.map((item, index) => {
                    return <Date key={index} date={item} />
                }) : ""}
            </div>
        </div>
    )
}

export default Calendar;