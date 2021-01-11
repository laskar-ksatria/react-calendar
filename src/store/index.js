import { SET_CALENDAR, SET_EDIT_EVENT, SET_EVENT, SET_MONTH_NAME } from './type'

//Export all functions
export * from './functions'
//Export default data
export * from './defaultData'

const initialState = {
    month_name: null,
    day_names: null,
    calendars: null,
}

const reducer = (state = initialState, action) => {
    let { type, data } = action;
    switch(type) {
        case SET_CALENDAR:
            return {...state, calendars: data};
        case SET_MONTH_NAME:
            return {...state, month_name: data};
        default:
            return state;
    }
};


export default reducer

