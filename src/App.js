import React from 'react';
import "./app.css"
// import { DishContainer } from './dish';
// import WeatherApp from './weather'
import {WeatherApp} from "./weather"

const App = ()=>{
  return(
    <div className='main-container'>
    <WeatherApp/>
    </div>
  )
}

export default App