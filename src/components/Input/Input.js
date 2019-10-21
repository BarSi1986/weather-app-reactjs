import React from 'react'
import PropTypes from 'prop-types'

import './Input.sass'

const Input = ({ submitCity, showWeather, city }) => (
    <div className="inputContainer">
        <form>
            <input value={city} onChange={submitCity} placeholder='enter city..' className='cityName' type="text" />
            <button onClick={showWeather}>submit city</button>
        </form>
    </div>

)

Input.propTypes = {
    submitCity: PropTypes.func.isRequired,
    showWeather: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
}

export default Input
