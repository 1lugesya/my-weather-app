import React,{useState} from 'react';
import Wheather from './Wheatherresult'
import './App.css';

function App () {
  const apiKey = "8e93522f437542938f0170337211003"
  let cityinput = ""
  const [wheatherdata,setwheatherdata]= useState([])


function citytext()
{
  document.querySelector("input").addEventListener("input" , (e) =>{
e.preventDefault();
cityinput = e.target.value;
console.log(cityinput)
  })
}
async function getdata(value)
{
  const data= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value}&days=5&aqi=no&alerts=no`)
  const result = await data.json();
  setwheatherdata(result.forecast.forecastday)
  console.log(result.forecast.forecastday)
}
  return (
    <div>
        <div className="search" >
        <input type ="text" placeholder="Search a city.." onChange ={citytext} />
        <button onClick ={()=> getdata(cityinput)} > Search </button>
    {/* {<div className= "weather-card">} */}
    {/* {wheatherdata.map(item=>(<Wheather key={item.date} date={item.date} mintemp={item.day.mintemp_c} 
        maxtemp= {item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon} />))} */}


    {/* </div> */}
  
        </div>
        <div className="weather-wrapper">
        {wheatherdata.map(item=>(<Wheather key={item.date} date={item.date} mintemp={item.day.mintemp_c} 
        maxtemp= {item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon} time= {item.hour["0"].time.slice(10)} />))}
 </div>
 <div className="sky">
    <div className="moon"></div>
    <div className="clouds_two"></div>
    <div className="clouds_one"></div>
    <div className="clouds_three"></div>
  </div>
      </div>
    //time= {item.hour["0"].time}
    );
}

  


export default App;
