import React,{useState} from 'react';
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import {handleClick} from "./components/Weather"

//http://api.openweathermap.org/data/2.5/weather?q=Strzelin&appid=87342d5fe25c36f18893da03fd123f18
const App=()=> {
  
  const [data,setData] = useState(null)
  const [city,setCity] = useState("")
 
  return (
    <React.Fragment>
        <div className="App">
        <div className="App__settings">
        <h4 className="App__settings-title">Weather</h4>
        <div className="App__options">
          <input type="text" name="weather" className="App__options-data" 
          placeholder="Type your City" 
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          />
        <button onClick={()=>handleClick(setData,city)} className="App__options-btn">Search</button>
        </div>
        </div>
        <Weather data={data}/>
    
          <div className="App__back"></div>
    </div>
 
    </React.Fragment>
  )
}

export default App;
