import cogoToast from 'cogo-toast'
import moment from 'moment'
import { SET_CALENDAR, SET_MONTH, SET_EVENTS } from './type'

export const F_GET_CALENDAR = (dispatch) => {

    return new Promise((res, rej) => {
        //FIND FOR THE DATES OF THE CURRENT MONTH --------------------------
        const date = new Date()
        const current_date = date.getDate()
        const month = date.getMonth()
        
        let allDates = []
        for (let i = 1; i <= 31; i++) {
            let countDay;
            let diffDate;
            if (i < current_date) {
                countDay = current_date - i;
                diffDate = new Date().setDate(date.getDate() - countDay)
            }else if (i === current_date) {
                diffDate = new Date().setDate(date.getDate() + 0)
            }else if (i > current_date) {
                countDay = i - current_date
                diffDate = new Date().setDate(date.getDate() + countDay)
            }
            if (new Date(diffDate).getMonth() === month) {
                allDates.push(diffDate)
            }
        }

        //FIND EXCESS DAY FOR DISPLAY ------------------------------------
        let excessDay = 35 - allDates.length;
        let count = excessDay;
        let minDay = allDates[0]
        let maxDay = allDates[1]
        if (moment(minDay).format('dddd') !== 'Monday') {
            for (let i = 1; i <= excessDay; i++) {
                if (count !== 0) {
                    let oldDate = new Date(minDay)
                    let newDate = new Date().setDate(oldDate.getDate() - i)
                    // oldDate.setDate(oldDate.getDate() - i)
                    allDates.unshift(newDate)
                    if (moment(oldDate).format === 'Monday') {
                        break
                    }else {
                        count --
                    }
                }
            }
            if (count !== 0) {
                for (let i = 1; i <= count; i++) {
                    let oldDate = new Date(maxDay)
                    let newDate = new Date().setDate(oldDate.getDate() + i)
                    // oldDate.setDate(oldDate.getDate() + i)
                    allDates.push(newDate)
                }
            }
        }else {
            for (let i = 1; i < excessDay; i++) {
                    let oldDate = new Date(maxDay)
                    let newDate = new Date().setDate(oldDate.getDate() + i)
                    // oldDate.setDate(oldDate.getDate() + i)
                    allDates.push(newDate)
            }
        }
        //DISPATCHING TO REDUX -----------------------
        let monthSet = moment(date).format("LL").split(" ")[0]
        dispatch({type: SET_MONTH, data: monthSet})
        dispatch({type: SET_CALENDAR, data: allDates})
        res()
    })
    
}

export const F_FILTER_DATE = (data, dayName) => {
    return new Promise((res, rej) => { 
        const filtering = data.filter(item => {
            let name = moment(item).format('dddd')
            return name === dayName
        })
        res(filtering)
    })
}


export const F_SET_NEW_EVENT = (dispatch, data) => {
    let allEvents = localStorage.getItem('calendar_current_event')
    if (allEvents) {
        let find = false;
        let parseAllEvents = JSON.parse(allEvents)
        let newAllEvents = []
        parseAllEvents.forEach(item => {
            if (moment(item.date).format("L") === moment(data.date).format("L")) {
                if (item.event.id === data.event.id) {
                    newAllEvents.push(data)
                    find = true
                }else {
                    newAllEvents.push(item)
                }
            }else {
                newAllEvents.push(item)
            }
        })
        if (find) {
            localStorage.setItem('calendar_current_event', JSON.stringify(newAllEvents))
            dispatch({type: SET_EVENTS, data: newAllEvents})
        }else {
            parseAllEvents.push(data)
            localStorage.setItem('calendar_current_event', JSON.stringify(parseAllEvents))
            dispatch({type: SET_EVENTS, data: parseAllEvents})
        }
    }else {
        localStorage.setItem('calendar_current_event', JSON.stringify([data]))
        dispatch({type: SET_EVENTS, data: [data]})
    }
    cogoToast.success("Event already save")
}

export const F_DELETE_EVENT = (dispatch, id, cb) => {
    let allEvents = localStorage.getItem('calendar_current_event')
    if (allEvents) {
        let parseEvents = JSON.parse(allEvents)
        let newEvents = parseEvents.filter(item => item.event.id !== id)
        if (newEvents.length === 0) {
            localStorage.removeItem('calendar_current_event')
            dispatch({type: SET_EVENTS, data: null})
            cogoToast.success("Event has been deleted")
        }else {
            localStorage.setItem('calendar_current_event', JSON.stringify(newEvents))
            dispatch({type: SET_EVENTS, data: newEvents})
            cogoToast.success("Event has been deleted")
        }
        cb()
    }else {
        cb()
    }
    
}

