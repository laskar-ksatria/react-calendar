import React from 'react'
import Moment from 'moment'
import randomColor from 'randomcolor'
import { useSelector } from 'react-redux'
import ModalForm from './ModalForm'

function Date({ date }) {

    //Define global var
    const events = useSelector(state => state.events)
    const month = useSelector(state => state.month)

    //Modal functions
    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    //EventData
    const [eventData, setEventData] = React.useState(null)

    const [isInMonth, setIsInMont] = React.useState(true);

    const checkInMonth = () => {
        let myMonth = Moment(date).format("LL").split(" ")[0]
        if (myMonth !== month) {
            setIsInMont(false)
        }
    }

    const setEvents = () => {
        if (events) {
            let newEvents = []
            events.forEach(item => {
                if (Moment(item.date).format("L") === Moment(date).format("L")) {
                    newEvents.push(item.event)
                }
            })
            if (newEvents.length > 0) {
                setEventData(newEvents)
            }
        }else {
            setEventData(null)
        }
    }

    React.useEffect(checkInMonth, [date, month])
    React.useEffect(setEvents, [events, date])

    return (
        <>
            <div onClick={handleShow} className={`bg-light p-0 date-list ${isInMonth ? "in-month-date" : "out-month-date"}`} style={{position: 'relative', display: 'flex', flexDirection: 'column'}}>
                <span className={isInMonth ? 'in-month' : 'out-month'}>
                    {Moment(date).format('l').split('/')[1]}
                </span>
                {eventData ? 
                    eventData.map((item, index) => {
                        return (
                            <div key={index} style={{fontSize: '10px', fontWeight: 'bold',flex: 1, backgroundColor: randomColor()}}>
                                <p style={{margin: "auto", width: '100%'}}>{item.event_name} || {item.time}</p>
                                <p style={{margin: "auto", width: '100%'}}>{item.invites_email}</p>
                            </div>
                        )
                    })
                
                : ""}
            </div>
            
            {/* MODAL FORM EVENT ------ */}
            <ModalForm
                show={show} 
                handleClose={handleClose} 
                date={date}
                eventData={eventData} 
            />         
        </>
    )
}

export default Date;