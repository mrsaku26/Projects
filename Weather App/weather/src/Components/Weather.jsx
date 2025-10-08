import React, { useEffect, useState } from 'react'
import './Weather.css'
import blueicon from '../assets/blueicon.png'
import clear from '../assets/clear.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'

const Weather = () => {

   const[searchs,setSearch]=useState('Nepal')
   const[weatherdata,setWeatherdata]=useState('')
   const allIcons={
      '01d':clear,
      '01n':clear,
      '02d':cloud,
      '02n':cloud,
      '03d':cloud,
      '03n':cloud,
      '04d':drizzle,
      '04n':drizzle,
      '09d':rain,
      '09dn':rain,
      '10d':rain,
      '10dn':rain,
      '13d':snow,
      '13n':snow


   }

   const search=async()=>{
      try {
         const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchs}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

         const res=await fetch(url)
         const data=await res.json()

      if(data.cod!==200){
         alert('Enter a valid location')
      }
         console.log(data)
         const icon=allIcons[data.weather[0].icon] || clear_icon
         setWeatherdata({
            humidity:data.main.humidity,
            windSpeed:data.wind.speed,
            temperature:Math.floor(data.main.temp),
            location:data.name,
            icon:icon
         })
      } catch (error) {
         console.error(error)
      }
   }

   const valuee=(e)=>{
      setSearch(e.target.value)
   }

 useEffect(()=>{
   search()
 },[])

  return (
   <>
   <div className="weather">
      <div className="search-bar">
          <input type="text" placeholder='Search' onChange={valuee}/>
      <img src={blueicon} alt="" className='imgg' onClick={search}/>
      </div>
     <img src={weatherdata?weatherdata.icon:clear} alt=""  className='weathers'/>
     <p className='temp'>{weatherdata?weatherdata.temperature:''}°c</p>
     <p className='city'>{weatherdata?weatherdata.location:''}</p>
     <div className="weather-data">
      <div className="col">
         <img src={humidity} alt="" />
         <div>
            <p>{weatherdata?weatherdata.humidity:''} %</p>
            <span>Humidity</span>
         </div>
      </div>
        <div className="col">
         <img src={wind} alt="" />
         <div>
            <p>{weatherdata?weatherdata.windSpeed:''} Km/h</p>
            <span>Wind Speed</span>
         </div>
      </div>
     </div>
   </div>
   </>
  )
}

export default Weather