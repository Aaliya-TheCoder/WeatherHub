import SearchBox from "./searchBox";
import Infobox from "./infoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
            city:"Delhi",
            temp: 24.84,
            feelsLike:25.05,
            tempMin:25.05,
            tempMax:25.05,
             humidity:47,
            weather:"Haze"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <Infobox info={weatherInfo}></Infobox>
        </div>
    )
}