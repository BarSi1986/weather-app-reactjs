import React, { useState } from 'react';
import './App.sass';
import WeatherPanel from './components/WeatherPanel/WeatherPanel'



const App = () => {

  // weather api key id
  const apiKey = 'ea5a16a06e7e2f24c3d2aa3873fcaf28'

  // initial state
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('')

  // get weather
  const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const data = await response.json()
    setWeather(data)
  }

  // enter city to state
  const submitCity = e => {
    let t = e.target.value
    setCity(t)
  }

  // submit city to fetch proper data from api
  const showWeather = e => {
    e.preventDefault()
    getWeather()
    setCity('')
  }

  return (
    <div className='main-container'>
      <WeatherPanel
        submitCity={submitCity}
        showWeather={showWeather}
        city={city}
        weather={weather}
      />
    </div>
  )
}

export default App;
