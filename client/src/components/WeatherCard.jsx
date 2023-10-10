import React from 'react'
import './WeatherCard.css'

function convertUnixTimestampToCityTime(unixTimestamp, utcOffsetInSeconds) {
    const utcSeconds = unixTimestamp + utcOffsetInSeconds;
    const cityDate = new Date(utcSeconds * 1000);

    return cityDate.toLocaleTimeString(undefined, {
        timeZone: 'UTC',
        hour: 'numeric',
        minute: 'numeric'
    });
}



function WeatherCard({ data, city }) {
     
    if (data && city) {
        return (
            <div className='weatherCard'>
                <h3>
                    <span>{data.name}, {data.sys.country}</span>
                </h3>
                <h3>
                    <span>{Math.round((data.main.temp-273.15) * 9/5 + 32)} Fahrenheit, {Math.round((data.main.temp-273.15))} Celsius </span>
                </h3>
                <h3>
                    <span> Feels like: {Math.round((data.main.feels_like-273.15) * 9/5 + 32)} Fahrenheit, {Math.round((data.main.feels_like-273.15))} Celsius </span>
                </h3>
                <h3>
                    <span>Description: {data.weather[0].description}</span>
                </h3>
                <h3>
                    <span>Sunrise: {convertUnixTimestampToCityTime(data.sys.sunrise, data.timezone)}</span>
                </h3>
                <h3>
                    <span>Sunset: {convertUnixTimestampToCityTime(data.sys.sunset, data.timezone)} </span>
                </h3>
            </div>
        )
    }
}

export default WeatherCard