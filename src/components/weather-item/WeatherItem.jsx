import React from 'react'

const WeatherItem =({weekDay, minTemp, maxTemp}) => (
    <div>
        <h4>{weekDay}</h4>
        <ul>
            <li>Min: {minTemp}</li>
            <li>Max: {maxTemp}</li>
        </ul>
    </div>
);

export default WeatherItem

