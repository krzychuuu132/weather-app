import React,{useState} from 'react';
import Fetcher from "./Fetcher"

export const handleClick = async(setData,city,country,setError,setCity,setCounter) =>{
  const APIKEY ="3685edcdeb2b60f9ec66ee97605d3489"

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`;

    
  if(city ===""|| country === ""){
    setError(true)
  }
  else{

 const data = await Fetcher(url)
  setData(data.data)
  setCity("");
  setCounter("")
  setError(false)
  }
    
    
   
    
  
   
}


const getDate = ()=>{
const months = ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]

  const date = new Date();
const day = date.getDay()+1;
const month = date.getMonth();


return `${day} ${months[month]}`
}

const getDegree = (temp)=>{
  
  const temperatue =  temp;
  const celcius = Math.floor(temperatue -273.15);

  
  return celcius
}
const ShowWeatherContent =  (data)=>{
  const dataApi = data.main===undefined

  return(
    <>
    
      
     
       
         
  <h5 className="weather-content__date">{getDate()}</h5>
    <h1 className="weather-content__month">{data.name} <span className="fas fa-arrow-right weather-content__month-icon"></span></h1>
    <div className="weather-content__details">
      <div className="weather-content__details-main">
       <p className="weather-content__details-main_temp">{dataApi?"...":getDegree(data.main.temp)}&deg;</p>
       <span className="weather-content__details-main-feel">feels like {dataApi?"...":getDegree(data.main.temp_min)}&deg;</span>
        </div>
      <div className="weather-content__details-info">
        <div className="weather-content__details-info_element">
          <p className="weather-content__details-info_state"><span className="wi wi-cloudy weather-content__details-info_icon"></span>Cloudy</p>
          <span className="weather-content__details-info_value">{dataApi?"...":data.clouds.all} %</span>
        </div>
        <div className="weather-content__details-info_element">
        <p className="weather-content__details-info_state"><span className="wi wi-raindrop weather-content__details-info_icon"></span>Rain</p>
          <span className="weather-content__details-info_value">40%</span>
        </div>
        <div className="weather-content__details-info_element">
        <p className="weather-content__details-info_state"><span className="wi wi-windy weather-content__details-info_icon"></span>Wind</p>
  <span className="weather-content__details-info_value">{dataApi?"...":data.wind.speed} km/h</span>
        </div>
        <div className="weather-content__details-info_element">
        <p className="weather-content__details-info_state"><span className="wi wi-humidity weather-content__details-info_icon"></span>Rain</p>
          <span className="weather-content__details-info_value">{dataApi?"...":data.main.humidity}%</span>
        </div>
      </div>
    </div>
        
        </>
      
    
    
    
   
  )
}
const Weather=(props)=> {

return (
      <>
       
        <div className="weather-content">
        {ShowWeatherContent(props.data)}
        </div>
     </>
    );
  }
  
  export default Weather;

 