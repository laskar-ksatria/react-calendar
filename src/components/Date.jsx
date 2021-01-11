// import React from 'react'
// import Day from './Day'
// import { F_FILTER_DATE } from '../store'
// import { useSelector } from 'react-redux'
// import Moment from 'moment'

// function Date({ dayName }) {
//     //Define global var
//     const { calendars } = useSelector(state => state)

//     const [state, setState] = React.useState(null)

//     const getDateByDay = () => {
//         F_FILTER_DATE(calendars, dayName)
//             .then(value => setState(value))
//     };

//     React.useEffect(getDateByDay, [dayName])

//     return (
//         <div className="col text-center bold p-0">
//             <div className="d-flex flex-column border-top border-dark">
//                 {state ? state.map((item, index) => {
//                     console.log(item)
//                     return <p key={index}>{Moment(item).format('l').split('/')[1]}</p>
//                 }) : ""}
//             </div>
//         </div>
//     )
// }

// export default Date;

import React from 'react'

function Date() {
    return (
        <div className="col bg-primary" style={{width: 'calc(100% /7 '}}>

        </div>
    )
};

export default Date