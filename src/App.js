import React from 'react'
import Calendar from './views/Calendar'
import { F_GET_CALENDAR, SET_EVENTS } from './store'
import { useDispatch } from 'react-redux'
import Loading from './views/Loading'

const App = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true)

  const getCalendar = () => {
    setTimeout(() => {
      F_GET_CALENDAR(dispatch)
        .then(() => {
          let currentEvents = localStorage.getItem('calendar_current_event')
          if (currentEvents) {
            dispatch({type: SET_EVENTS, data: currentEvents})
          }
          setLoading(false)
        })
    }, 1000);
  }

  //useEffect
  React.useEffect(getCalendar, [dispatch])

  return (
    <>
      {loading ? <Loading /> : <Calendar />}
    </>
  )
}

export default App;