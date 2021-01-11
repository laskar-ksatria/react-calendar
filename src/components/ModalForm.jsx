import React from 'react'
import { Modal } from 'react-bootstrap'
import Moment from 'moment'
import cogoToast from 'cogo-toast'
import EventForm from './EventForm'
import uuid from 'react-uuid'

function ModalForm({ show, handleClose, date, eventData }) {

    const [state, setState] = React.useState(null)

    const checkEvent = () => {
        setState(eventData)
    };

    const handleChange = (id, e) => {
        let newState = state;
        newState.forEach(item => {
            if (item.id === id) {
                item[e.target.name] = e.target.value
            }
        })
        setState(newState);
    }

    const addForm = () => {
        if (state.length === 3) {
            return cogoToast.error('Cannot add more then 3 events')
        }else {
            let newId = uuid()
            setState([...state, {id: newId, event_name: "", time: "", invites_email: ""}])
        }
    };

    const deleteEvent = (id) => {
        if (state.length === 1) {
            setState([{id: uuid(), event_name: "", time: "", invites_email: ""}])
        }else {
            setState(state.filter(item => item.id !== id))
        }
    }

    const closeForm = () => {
        if (state.length > 1) {
            const filtering = state.filter(item => {
                return item.id !== state[state.length - 1].id
            })
            setState(filtering)
        } 
    };

    const handleSubmit = (data) => {
        
    }

    React.useEffect(checkEvent, [eventData])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <h6 className="text-center">Add event at {Moment(date).format('ll')}?</h6>
                </Modal.Header>
                <Modal.Body>
                    {state ? state.map((item, index) => {
                        return <EventForm deleteEvent={deleteEvent} key={index} handleChange={handleChange} event={item} events={state} />
                    }) : ""}
                
                <div className="mt-2 border-top pt-3 d-flex justify-content-between">
                    <button type="button" className="btn btn-success btn-sm" onClick={addForm}>Add Form</button>
                    <button type="button" className="btn btn-warning btn-sm" onClick={closeForm}>Reduce Form</button>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <div className="d-flex justify-content-center align-items-center" style={{width: '100%'}}>
                        <button onClick={handleSubmit} type="button" className="btn btn-primary" style={{width: '60%'}}>
                            Save Change
                        </button>
                    </div> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalForm;