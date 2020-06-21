import React, {useEffect} from "react";
import {changeCurrentLocation, changeView, getCurrentWeather} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import "./FavoriteCard.scss";
import { useHistory } from "react-router-dom";

function FavoriteCard(props){
    const dispatch = useDispatch();
    const history = useHistory();
    const currentWeather = useSelector(state => state.currentWeather)

    useEffect(() => {
        dispatch(getCurrentWeather(props.favorite.Key))
    }, [currentWeather]);

    function onFavoriteClicked() {
        dispatch(changeCurrentLocation(props.favorite))
        dispatch(changeView("home"))
        history.push('/');
    }

    return (
      <div className="favorite-card" onClick={() => onFavoriteClicked()}>
          <div className='favorite-name'>{props.favorite.LocalizedName}</div>
          <img className='favorite-weather-icon' src={currentWeather ? `${process.env.PUBLIC_URL}/weatherIcons/${currentWeather[0].WeatherIcon}.png`: null}/>
          <div className='favorite-current-temperature'>{currentWeather ? `${currentWeather[0].Temperature.Metric.Value}°`: null}</div>
      </div>
    );
}

export default FavoriteCard;