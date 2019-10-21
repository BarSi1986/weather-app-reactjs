import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import ReactMapGL from 'react-map-gl'
import './WeatherData.sass'

const WeatherData = ({ weather }) => {

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        zoom: 12,
    });

    const Map_KEY = 'pk.eyJ1IjoiYmFyc2kxOTg2IiwiYSI6ImNrMTZ1Mno2NDBwbGkzbm4xenhxbXZmN2QifQ.75-SiSl9ohSB1R84aG41mw'
    const Map_STYLE = 'mapbox://styles/barsi1986/ck16vh8y40ofp1cmmbixsrdkc'

    return (
        <Fragment>
            <h3>Current weather in: <span>{weather.name}</span>, Country: <span>{weather.sys.country}</span></h3>
            <div className="dataContainer">
                <ul>
                    <li>temperature: <span>{Math.floor(weather.main.temp - 273.15)} &#8451;</span>, {weather.weather[0].description}</li>
                    <li>pressure: <span>{weather.main.pressure}</span> hPa</li>
                    <li>humidity: <span>{weather.main.humidity}</span> %</li>
                    <li>wind speed: <span>{Math.floor(weather.wind.speed * 3.6)}</span> km/h</li>
                    <li>sunrise: <span>{new Date(weather.sys.sunrise).toLocaleTimeString()}</span> h</li>
                </ul>
                <div className='mapContainer'>
                    <ReactMapGL
                        {...viewport}
                        mapboxApiAccessToken={Map_KEY}
                        onViewportChange={viewport => {
                            setViewport(viewport);
                        }}
                        longitude={weather.coord.lon}
                        latitude={weather.coord.lat}
                        mapStyle={Map_STYLE}
                    >
                    </ReactMapGL>
                </div>
            </div>
        </Fragment>
    )
}

WeatherData.propTypes = {
    weather: PropTypes.object.isRequired,
}

export default WeatherData