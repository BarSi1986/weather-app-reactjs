import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import Weather from '../Weather/Weather'
import About from './About'
import './WeatherPanel.sass'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const WeatherPanel = ({ submitCity, showWeather, city, weather }) => {

    const [about, setAbout] = useState(false)

    const activeAbout = () => {
        setAbout(true)
    }
    const deactiveAbout = () => {
        setAbout(false)
    }

    return (
        <Router>
            <div className='container'>
                <div className="flex">
                    <nav>
                        <ul>
                            <li>
                                <Link onClick={deactiveAbout} activeStyle={{ color: 'rgb(196, 91, 30)' }} exact to="/">Home</Link >
                            </li>
                            <li>
                                <Link onClick={activeAbout} activeStyle={{ color: 'rgb(196, 91, 30)' }} to="/about">About</Link >
                            </li>
                        </ul>
                    </nav>
                    {!about ? <Input
                        submitCity={submitCity}
                        showWeather={showWeather}
                        city={city}
                    /> : null}

                </div>
                <Switch>
                    <Route exact path='/'>
                        <Weather weather={weather} />
                    </Route>

                    <Route path='/about'>
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

WeatherPanel.propTypes = {
    submitCity: PropTypes.func.isRequired,
    showWeather: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
}

export default WeatherPanel