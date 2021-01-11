import React from 'react'
import Day from './Day'
import { F_FILTER_DATE } from '../store'
import { useSelector } from 'react-redux'
import Moment from 'moment'

function Date({ dayName }) {
    //Define global var
    const { calendars } = useSelector(state => state)

    const [state, setState] = React.useState(null)

    const getDateByDay = () => {
        F_FILTER_DATE(calendars, dayName)
            .then(value => setState(value))
    };

    React.useEffect(getDateByDay, [dayName])

    return (
        <div className="col text-center bold">
            <h4>{dayName}</h4>

            {/* <br />
            {state ? state.map((item, index) => {
                return <p key={index}>{Moment(item).format('ll')}</p>
            }) : ""} */}
        </div>
    )
}

export default Date;