import React from 'react'
import './Wheatherresult.css'

function Wheatherresult ({date, mintemp, maxtemp, condition, icon}) {
return (
<div  className = "result">
        <h2>{date}</h2>
       <ul>
<li><img src={icon} alt="//cdn.weatherapi.com/weather/64x64/day/116.png"/></li>
<li>{condition}</li>
<li>  {mintemp} C / {maxtemp} C </li> 
{/* <li>{time}</li> */}


       </ul>
    </div>

);
}

export default Wheatherresult;