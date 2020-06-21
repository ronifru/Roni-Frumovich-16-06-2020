import React from "react";
import "./DayForecastCard.scss";

function DayForecastCard(props) {
    function getDay(){
        let options = { weekday: 'long'};
        let day =  Intl.DateTimeFormat('en-US', options).format(new Date(props.day));
        return day;
    }
    function getDateString(){
        let date = new Date(props.day)
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`//month + 1 because getMonth() returns a number between 0-11
    }
    return (
      <div className='day-forecast-card'>
          <div className='day-and-date'>
              <div className='date-string'>{getDateString()}</div>
              <div className='day-string'>{getDay()}</div>
          </div>
          <img className='day-weather-icon' src={`${process.env.PUBLIC_URL}/weatherIcons/${props.icon}.png`}/>
          <div className='day-temperature'>{`${props.minTemperature}°C/${props.maxTemperature}°C`}</div>
      </div>
    );
};

export default DayForecastCard;