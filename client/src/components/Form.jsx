import React from 'react'
import { useState } from "react";
import WeatherCard from './WeatherCard';
import './Form.css'



function Form() {
    const [city, setCity] = useState('')
    const [data, setData] = useState('')

    const getWeather = async () => {
        const response = await fetch(
            `http://localhost:8080/api?city=${city}`
        )

        const weatherData = await response.json()
        setData(weatherData)
        
    }
    return (
        <div className='form'><h1>What's the weather?</h1>
            <input
                type='text'
                id='city'
                name='city'
                placeholder='Enter a city'
                onChange={(e) => setCity(e.target.value)}
            ></input>
            <button onClick={ getWeather }>
                Get Weather
            </button>
            <WeatherCard city={city} data={data}/>
        </div>
    )
}

export default Form