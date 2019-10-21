import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ weather }) => (
    <div>
        {weather.length === 0 && null}
        {weather.cod === '400' && <h3>Please enter something</h3>}
        {weather.cod === '404' && <h3>I can't find such city, try again...</h3>}
    </div>
)

Alert.propTypes = {
    weather: PropTypes.array.isRequired,
}

export default Alert
