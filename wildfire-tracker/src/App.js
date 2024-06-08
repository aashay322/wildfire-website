import React, { useState, useEffect } from 'react'
import CustomMap from './components/CustomMap'
import {APIProvider} from '@vis.gl/react-google-maps'
import Header from './components/Header';
import Loader from './components/Loader';
import "./App.css";

const App = () => {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true) 
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
      
    }
    fetchEvents()
    
  }, [])
  return (
    <div className="app">
      <Header/>
      <APIProvider apiKey={ 'MY_API_KEY' }>
        { !loading ? <CustomMap eventData={eventData}/> : <Loader/>}
      </APIProvider>
    </div>
  )
}

export default App