import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./searchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
        let [city,setCity] = useState("");
        let [error,setError] = useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "b34887201e26b4b10570b179e5239bd0";
    let getWeatherInfo=async()=>{
      
                    let response=await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
        let jsonResponse=await response.json();

    if (!response.ok) {
        throw new Error(jsonResponse.message);
    }
        let result ={
            city:city,
            temp: jsonResponse.main.temp,
            feelsLike: jsonResponse.main.feels_like,
            tempMin: jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            weather:jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setError(false);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);

        }catch(err){
            setError(true);
        }

    }
    return(
        <div className='searchBox'>
            <form onSubmit={handleSubmit}> 
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Search 
      </Button>
      {error && <p style={{color:"red"}}>No such place exists in our API</p>}
      </form>

        </div>

    )
}