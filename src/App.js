import React from 'react'
import Calendar from './views/Calendar'
import { F_GET_CALENDAR } from './store'
import { useDispatch } from 'react-redux'
import Loading from './views/Loading'

const App = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true)

  const getCalendar = () => {
    setTimeout(() => {
      F_GET_CALENDAR(dispatch)
        .then(() => setLoading(false))
    }, 2000);
  }

  //useEffect
  React.useEffect(getCalendar, [])

  return (
    <>
      {loading ? <Loading /> : <Calendar />}
    </>
  )
}

export default App;