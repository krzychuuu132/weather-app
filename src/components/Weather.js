import React,{useState} from 'react';
import Fetcher from "./Fetcher"

export const handleClick = async(setData,city) =>{
  
    const APIKEY ="3685edcdeb2b60f9ec66ee97605d3489"

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${APIKEY}`
    //https://samples.openweathermap.org/data/2.5/forecast/daily?q=M%C3%BCnchen,DE&appid=3685edcdeb2b60f9ec66ee97605d3489
    const data = await Fetcher(url)
    //87342d5fe25c36f18893da03fd123f18
  
    setData(data.data)
}

const showTemperature=(min,max) =>{
  return(
    <>
        <h3>{min} &deg;</h3>
        <h3>{max} &deg;</h3>
    </>
  )
}

const ShowWeatherContent = (data)=>{
  
  return(
    <>
    <h5 className="weather-content__date">March 12</h5>
    <h1 className="weather-content__month">Warsaw</h1>
    <div className="weather-content__details">
      <div className="weather-content__details-main">
       <p className="weather-content__details-main_temp"> 4 &deg;</p>
       <span className="weather-content__details-main-feel">feels like 7&deg;</span>
        </div>
      <div className="weather-content__details-info">
        <div className="weather-content__details-info_element">
          <p className="weather-content__details-info_state"><span className="wi wi-day-rain weather-content__details-info_icon"></span>Rain</p>
          <span className="weather-content__details-info_value">40%</span>
        </div>
        <div className="weather-content__details-info_element">
        <p className="weather-content__details-info_state"><span className="wi wi-raindrop weather-content__details-info_icon"></span>Rain</p>
          <span className="weather-content__details-info_value">40%</span>
        </div>
        <div className="weather-content__details-info_element">
        <p className="weather-content__details-info_state"><span className="wi wi-windy weather-content__details-info_icon"></span>Rain</p>
          <span className="weather-content__details-info_value">40%</span>
        </div>
        <div className="weather-content__details-info_element">
        <p className="weather-content__details-info_state"><span className="wi wi-day-sunny weather-content__details-info_icon"></span>Rain</p>
          <span className="weather-content__details-info_value">40%</span>
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

 