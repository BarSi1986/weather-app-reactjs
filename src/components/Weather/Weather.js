import React from 'react'
import WeatherData from '../WeatherData/WeatherData'
import Alert from '../Alert/Alert'
import './Weather.sass'

const Weather = ({ weather }) => (
    <div className='weatherContainer'>
        {weather.length !== 0 && weather.cod !== '400' && weather.cod !== '404' ? <WeatherData weather={weather} /> : <Alert weather={weather} />}
    </div >
)

export default Weather
