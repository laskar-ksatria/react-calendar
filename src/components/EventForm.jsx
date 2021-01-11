import React from 'react'
import { Form } from 'react-bootstrap'

function EventForm({ handleChange, events, deleteEvent, event }) {

    const [state, setState] = React.useState({event_name: "", email: ""})
    const change = e => {
        setState({...state, [e.target.name]: e.target.value})
        handleChange(event.id, e)
        // setState({...state, [e.target.name]: e.target.value})
    }

    React.useEffect(() => {
        setState(event)
    }, [events])

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
                            // value={state.time} 
                            onChange={change} 
                            placeholder="Example: 10:00 AM"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Invites Email</Form.Label>
                        <Form.Control 
                            size="sm" 
                            type="text" 
                            // value={state.invites_email} 
                            onChange={change} 
                            placeholder="Example: johndoe@mail.com"
                        />
                    </Form.Group>
                    <Form.Group>
                        <button type="button" >
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        <button type="button" className="ml-2">
                            <i className="fas fa-save"></i>
                        </button>
                    </Form.Group>
              </Form>

            {/* {state ?
                <>
                <Form className="border border-dark p-4 mb-3">
                    <Form.Group>
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control 
                            size="sm" 
                            type="text" 
                            value={state}
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
                            // value={state.time} 
                            onChange={change} 
                            placeholder="Example: 10:00 AM"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Invites Email</Form.Label>
                        <Form.Control 
                            size="sm" 
                            type="text" 
                            // value={state.invites_email} 
                            onChange={change} 
                            placeholder="Example: johndoe@mail.com"
                        />
                    </Form.Group>
                    <Form.Group>
                        <button type="button" onClick={() => deleteEvent(event.id)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </Form.Group>
              </Form>
              </>
            : ""} */}
        </>
    )

}

export default EventForm;