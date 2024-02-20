// import {useEffect} from 'react';

// export default function WeatherApp (){
//     console.log('rendering...')
//     useEffect(function(){
//      console.log('after mounting')
//     },[])
//     console.log('after useeffect')
//     return (
//         <>
//         <h1>app component</h1>
//         </>
//     b8170735927b9dce0686bc67437c4b81)
// }

import React, { useState, useEffect } from 'react';
// import { GetCityData } from './api';
import { SearchCity } from './searchcity';
import { Url } from './url';
import { calculateSunriseSunset } from './time';

export function WeatherApp() {
    const [cityName, setCityName] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");

    const changeCityName = (newCityName) => {
        setCityName(newCityName);
        setResponse(null);
        setError("");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (cityName) {
                    const response = await fetch(Url(cityName));
                    if (!response.ok) {
                        throw new Error('City not found');
                    }
                    const data = await response.json();
                    setResponse(data);
                    console.log(data)
                }
            } catch (err) {
                setError(err.message); 
            }
        };

        fetchData();
    }, [cityName]);
    const timeInfo = calculateSunriseSunset(response);
   const { sunrise, sunset } = timeInfo ? timeInfo : { sunrise: null, sunset: null };
    return (
       <div className='weather-container' style={{border : "1px solid green" ,padding:20 }}>
           <SearchCity getWeatherReport={changeCityName} />
           {response && (
               <div className='elementtorender'>
                
                   <p>Temperature: {`${(response.main.temp - 273.15).toFixed(1)}°C`}</p>
                   <p>Wind Speed: {response.wind.speed}</p>
                   <p>skyclearity: {response.weather[0].main}</p>
                   <p>Sunrise: {sunrise}</p>
                   <p>Sunset:  {sunset}</p>
                   <p>City :  {response.name}</p>
                   <p>Country: {response.sys.country}</p>
                   
               </div>
           )}
           {error && (
    <div  style={{ color: 'red',fontSize: '19px',padding:'5px' }}>
        {JSON.stringify(error)}
    </div>
)}

       </div>
    );
}






