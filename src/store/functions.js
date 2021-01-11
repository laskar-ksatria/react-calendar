import moment from 'moment'
import { SET_CALENDAR } from './type'


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
                    oldDate.setDate(oldDate.getDate() - i)
                    allDates.unshift(oldDate)
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
                    oldDate.setDate(oldDate.getDate() + i)
                    allDates.push(oldDate)
                }
            }
        }else {
            for (let i = 1; i < excessDay; i++) {
                    let oldDate = new Date(maxDay)
                    oldDate.setDate(oldDate.getDate() + i)
                    allDates.push(oldDate)
            }
        }
        
        //DISPATCHING TO REDUX -----------------------
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