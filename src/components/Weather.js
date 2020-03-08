import React,{useEffect,useRef} from 'react';
import Fetcher from "./Fetcher"
import gsap from "gsap"

export const handleClick = async(setData,city,country,setError,setCity,setCounter) =>{
  const APIKEY ="3685edcdeb2b60f9ec66ee97605d3489"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`;

    
  if(city ===""|| country === ""){
    setError(true)
  }
  else{
  
       const data = await Fetcher(url,setError);
      
       if(data===undefined){
        
        setError(true)
       }
       else{
        setCity("");
        setCounter("")
        setError(false)
        setData(data.data)
       }

    


  }
    }


const getDate = ()=>{
const months = ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]

  const date = new Date();
const day = date.getDate();
const month = date.getMonth();
console.log(date,day)

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
    
      
     
       
        <div className="weather-content__text">
          <h5 className="weather-content__date">{getDate()}</h5>
          <h1 className="weather-content__month">{data.name} <span className="fas fa-arrow-right weather-content__month-icon"></span><p className="weather-content__month-description">{dataApi?"...":data.weather[0].description}</p></h1>
  </  div>
    <div className="weather-content__details" >
      <div className="weather-content__details-main" id="temp">
       <p className="weather-content__details-main_temp">{dataApi?"...":getDegree(data.main.temp)}&deg;</p>
       <span className="weather-content__details-main-feel">feels like {dataApi?"...":getDegree(data.main.temp_min)}&deg;</span>
        </div>
      <div className="weather-content__details-info" id="info">
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
  const wrapper = useRef(null)
  useEffect(()=>{
    const [elements] = wrapper.current.children;
   
  
      const temp = document.getElementById("temp");
      
  
      //const info = elements.getElementById("temp");
  
      gsap.set([temp],{autoAlpha:0});

      const tl = gsap.timeline({defaults:{ease:"power3.inOut"}});

      gsap.fromTo(temp,{x:"-=300"},{duration:.5, x:"+=300",autoAlpha:1})
  },[])


return (
      <>
       
        <div className="weather-content" ref={wrapper}>
        {ShowWeatherContent(props.data)}
        </div>
     </>
    );
  }
  
  export default Weather;

 