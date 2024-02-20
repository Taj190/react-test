import { useState } from "react";
export const  SearchCity =({getWeatherReport})=>{
    const [cityname , setCityName] = useState("");

        function onChangeName (e){
            setCityName(e.target.value)
        }
        function onEnter (e){
         if(e.key === 'Enter'){
            getWeatherReport(cityname)
            setCityName("")
         }
        }

    return(
        <div className="input-conatiner">
            <label>Enter city name</label>
            <input onChange={onChangeName}  value={cityname} onKeyDown={onEnter} />
        </div>
    )
}