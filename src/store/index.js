import { SET_CALENDAR, SET_MONTH, SET_EVENTS } from './type'

//Export all functions
export * from './functions'
//Export default data
export * from './defaultData'
//Export all types
export * from './type'

const initialState = {
    month: null,
    calendars: null,
    events: null,
}

const reducer = (state = initialState, action) => {
    let { type, data } = action;
    switch(type) {
        case SET_CALENDAR:
            return {...state, calendars: data};
        case SET_MONTH:
            return {...state, month: data};
        case SET_EVENTS:
            return {...state, events: data}
        default:
            return state;
    }
};


export default reducer

