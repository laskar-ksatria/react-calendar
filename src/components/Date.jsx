import React from 'react'
import Moment from 'moment'
import randomColor from 'randomcolor'
import { useSelector } from 'react-redux'
import ModalForm from './ModalForm'
import { Button, Modal } from 'react-bootstrap'
import { initialEventData } from '../store'

function Date({ date }) {

    //Define global var
    const { events } = useSelector(state => state)

    //Modal functions
    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    //EventData
    const [eventData, setEventData] = React.useState(null)

    const setEvents = () => {
        if (events) {
            let myEvents = []
        }else {
            setEventData(initialEventData)
        }
    }

    React.useEffect(setEvents, [events])

    return (
        <>
            <div onClick={handleShow} className="bg-light p-0 date-list border border-dark" style={{position: 'relative', display: 'flex', flexDirection: 'column'}} data-toggle="modal" data-target={`#${Moment(date).format('LL')}`}>
                <span style={{position: 'absolute', top: 0, right: '5px', fontWeight: 'bold', fontSize: '20px'}}>
                    {Moment(date).format('l').split('/')[1]}
                </span>
                {/* <div style={{fontSize: '11px', fontWeight: 'bold',flex: 1, backgroundColor: randomColor()}}>
                    <p style={{margin: "auto", width: '100%'}}>Home Theater</p>
                    <p style={{margin: "auto", width: '100%'}}>12:00AM</p>
                </div>
                <div style={{fontSize: '11px', fontWeight: 'bold',flex: 1, backgroundColor: randomColor()}}>
                    <p style={{margin: "auto", width: '100%'}}>Home Theater</p>
                    <p style={{margin: "auto", width: '100%'}}>12:00AM</p>
                </div> */}
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

{/* <div className="bg-light p-0 date-list border border-dark" style={{position: 'relative', display: 'flex', flexDirection: 'column'}}>
<span style={{position: 'absolute', top: 0, right: '5px', fontWeight: 'bold'}}>
    {Moment(item).format('l').split('/')[1]}
</span>
<div style={{fontSize: '11px', flex: 1, backgroundColor: randomColor()}}>
    <p style={{margin: "auto", width: '100%'}}>Home Theater</p>
    <p style={{margin: "auto", width: '100%'}}>12:00AM</p>
</div>
<div style={{fontSize: '12px', flex: 1, backgroundColor: randomColor()}}>
    2. Music Theater
</div>
</div> */}