import React from 'react'
import { Form } from 'react-bootstrap'
import { F_SET_NEW_EVENT, F_DELETE_EVENT } from '../store'
import { useDispatch } from 'react-redux'

function EventForm({ handleChange, deleteEvent, event, date }) {

    //Define dispatch
    const dispatch = useDispatch()

    const [state, setState] = React.useState(event)
    const change = e => {
        setState({...state, [e.target.name]: e.target.value})
        handleChange(event.id, e)
    }

    React.useEffect(() => {
        setState(event)
    }, [event])

    const handleSave = () => {
        let newEvent = {date, event: state}
        F_SET_NEW_EVENT(dispatch, newEvent)
    }

    const deletedEvent = (id) => {
        setState({...state, event_name: "", invites_email: "", time: ""})
        F_DELETE_EVENT(dispatch, id, () => {
            deleteEvent(id)
        })
    }

    return (
        <>
            <Form className="border border-dark p-4 mb-3">
                    <Form.Group>
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control
                            name="event_name" 
                            size="sm" 
                            type="text" 
                            value={state.event_name}
                            // value={state.event_name} 
                            onChange={change} 
                            placeholder="Example: Classical Music" 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Time</Form.Label>
                        <Form.Control 
                            size="sm" 
                            type="text" 
                            name="time"
                            value={state.time} 
                            onChange={change} 
                            placeholder="Example: 10:00 AM"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Invites Email</Form.Label>
                        <Form.Control 
                            size="sm" 
                            type="email" 
                            name="invites_email"
                            value={state.invites_email} 
                            onChange={change} 
                            placeholder="Example: johndoe@mail.com"
                        />
                    </Form.Group>
                    <Form.Group>
                        <button onClick={() => deletedEvent(event.id)} type="button" >
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        <button onClick={handleSave} type="button" className="ml-2">
                            <i className="fas fa-save"></i>
                        </button>
                    </Form.Group>
              </Form>
        </>
    )

}

export default EventForm;