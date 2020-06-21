import React, {useEffect} from "react";
import {changeCurrentLocation, changeView, getCurrentWeather} from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import "./FavoriteCard.scss";
import { useHistory } from "react-router-dom";

function FavoriteCard(props){
    const dispatch = useDispatch();
    const history = useHistory();

    function onFavoriteClicked() {
        dispatch(changeCurrentLocation(props.favorite.locationDetails))
        dispatch(changeView("home"))
        history.push('/');
    }

    return (
      <div className="favorite-card" onClick={() => onFavoriteClicked()}>
          <div className='favorite-name'>{props.favorite.locationDetails.LocalizedName}</div>
          <img className='favorite-weather-icon' src={props.favorite.currentWeather ? `${process.env.PUBLIC_URL}/weatherIcons/${props.favorite.currentWeather[0].WeatherIcon}.png`: null}/>
          <div className='favorite-current-temperature'>{props.favorite.currentWeather ? `${props.favorite.currentWeather[0].Temperature.Metric.Value}°` : null}</div>
      </div>
    );
}

export default FavoriteCard;