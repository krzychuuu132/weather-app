import React,{useState,useEffect,useRef} from 'react';
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import {handleClick} from "./components/Weather";
import Fetcher from "./components/Fetcher";
import {showComponents} from "./components/Weather"


const App=()=> {
  const wrapper = useRef(null)

  const [data,setData] = useState("")
  const [error,setError] = useState(false)
  const [city,setCity] = useState("")
  const [country,setCountry] = useState("")

  useEffect(() => {
      const APIKEY ="3685edcdeb2b60f9ec66ee97605d3489"
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&APPID=${APIKEY}`
    async function getData(){
      const data = await Fetcher(url,setError)
      setData(data.data)
    }
    getData()
      
  }, []);

  

  return (
    <React.Fragment>
        <div className="App">
        <div className="App__settings">
        <h4 className="App__settings-title">Weather App</h4>
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
           <p className={!error?"App__options-data_text":"App__options-data_text App__options-data_text--error"}>wrong city or country </p>
        <button onClick={()=>{
          handleClick(setData,city,country,setError,setCity,setCountry)
            showComponents(wrapper)
          }} className={error?"App__options-btn App__options-btn--error":"App__options-btn" }>Search</button>
        </div>
        </div>
        <div className="weather-content" ref={wrapper}>
        <Weather data={data} wrapper={wrapper} />
        </div>
          <div className="App__back"></div>
    </div>
 
    </React.Fragment>
  )
}

export default App;
