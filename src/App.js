import React from 'react';
import Weather from "./components/Weather"

//http://api.openweathermap.org/data/2.5/weather?q=Strzelin&appid=87342d5fe25c36f18893da03fd123f18
const App=()=> {
  return (
    <>
    <div className="App">
     <Weather/>
        <div className="App__back"></div>
    </div>
 
    </>
  )
}

export default App;
