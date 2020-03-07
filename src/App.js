import React,{useState,useEffect} from 'react';
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import {handleClick} from "./components/Weather";
import Fetcher from "./components/Fetcher";


//http://api.openweathermap.org/data/2.5/weather?q=Strzelin&appid=87342d5fe25c36f18893da03fd123f18


const App=()=> {
  
  const [data,setData] = useState("")
  const [error,setError] = useState(false)
  const [city,setCity] = useState("")
  const [country,setCountry] = useState("")

  useEffect(() => {
      const APIKEY ="3685edcdeb2b60f9ec66ee97605d3489"
  
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&APPID=${APIKEY}`
    async function getData(){
      const data = await Fetcher(url)
      setData(data.data)
    }
    getData()
      
      
    
  
  
  
   }, []);

  

  return (
    <React.Fragment>
        <div className="App">
        <div className="App__settings">
        <h4 className="App__settings-title">Weather</h4>
        <div className="App__options">
         
          <input type="text" name="city" className={error?"App__options-data App__options-data--error":"App__options-data"} 
          placeholder="Type your City" 
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          />
            <input type="text" name="country" className={error?"App__options-data App__options-data--error":"App__options-data"}
          placeholder="Type your Country" 
          value={country}
          onChange={(e)=>setCountry(e.target.value)}
          />
        <button onClick={()=>handleClick(setData,city,country,setError,setCity,setCountry)} className={error?"App__options-btn App__options-btn--error":"App__options-btn" }>Search</button>
        </div>
        </div>
        <Weather data={data}/>
    
          <div className="App__back"></div>
    </div>
 
    </React.Fragment>
  )
}

export default App;
