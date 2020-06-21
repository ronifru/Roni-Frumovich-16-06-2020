import React, {useCallback, useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import './HomeContainer.scss';
import {
    addToFavorites,
    autoCompleteRequest, changeCurrentLocation, clearError,
    getCurrentWeather,
    getFiveDayForecast,
    removeFromFavorites
} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DayForecastCard from "../DayForecastCard/DayForecastCard";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from '@material-ui/core/Tooltip';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import debounce from 'lodash/debounce';


function HomeContainer() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const autoCompleteOptions = useSelector(state => state.locationOptions);
    const currentWeather = useSelector(state => state.currentWeather);
    const fiveDayForecast = useSelector(state => state.fiveDayForecast);
    const favorites = useSelector(state => state.favorites);
    const currentLocation = useSelector(state => state.currentLocation);
    const [favoritesNames, setFavoritesNames] = useState(favorites.map(favorite => (favorite.LocalizedName)));
    const [isInFavorites, setIsInFavorites] = useState(currentLocation ? favoritesNames.includes(currentLocation.LocalizedName) : null)

    useEffect(() => {
        console.log('in use effect')
        console.log(error)
        let defaultLocationKey = "215854"; //Tel Aviv key
        let defaultLocationName = "Tel Aviv";
        let currentLocationName = currentLocation ? currentLocation.LocalizedName : defaultLocationName;
        let currentLocationKey = currentLocation ? currentLocation.Key: defaultLocationKey;
        dispatch(autoCompleteRequest(currentLocationName));
        dispatch(getCurrentWeather(currentLocationKey));
        dispatch(getFiveDayForecast(currentLocationKey));
    }, []);

     const sendAutoCompleteRequest = useCallback(debounce(dispatchAutoComplete, 500), []);
     const showError = useCallback(()=> {
         if (error) {
             toast.error('An error has occurred. Please try again later.');
         }
     }, [error]);

    function dispatchAutoComplete(input){
        dispatch(autoCompleteRequest(input))
    }

    function onInputChange(event) {
        sendAutoCompleteRequest(event.target.value)
    }


    function onInputSelected(event, newValue) {
        if (newValue) {
            dispatch(changeCurrentLocation(newValue))
            dispatch(getCurrentWeather(newValue.Key))
            dispatch(getFiveDayForecast(newValue.Key));
            setIsInFavorites(favoritesNames.includes(newValue.LocalizedName));
        }
    }

    function onAddToFavoritesClicked(){
        if (!isInFavorites){
            dispatch(addToFavorites(currentLocation));
        }
        else {
            dispatch(removeFromFavorites(currentLocation))
        }
        setIsInFavorites(!isInFavorites);
    }


    function renderFiveDays(){
        let fiveDayForecastArray = [];
        fiveDayForecast.DailyForecasts.map(dayForecast => fiveDayForecastArray.push(
            <DayForecastCard
                day={dayForecast.Date}
                minTemperature={dayForecast.Temperature.Minimum.Value}
                maxTemperature={dayForecast.Temperature.Maximum.Value}
                icon={dayForecast.Day.Icon}>
            </DayForecastCard>))
        return fiveDayForecastArray;
    }

    let favoritesButtonText = isInFavorites ? "remove from favorites": "add to favorites";
    let favoritesButtonIcon = isInFavorites ?  <FavoriteIcon/> : <FavoriteBorderOutlinedIcon/>;

    if (!currentLocation) {
        if (autoCompleteOptions) {
            dispatch(changeCurrentLocation(autoCompleteOptions[0]));
        }
    }
    const CloseButton = ({ closeToast }) => (
        <i
            className="material-icons"
            onClick={() => dispatch(clearError())}
        >
            delete
        </i>
    );

    showError();

    return (
        <div className='home-container'>
            <Autocomplete
                className='search-bar'
                id="combo-box-demo"
                options={ autoCompleteOptions ?  autoCompleteOptions : []}
                getOptionLabel={(option) => `${option.LocalizedName}, ${option.Country.LocalizedName}`}
                onChange={(event, newValue) => onInputSelected(event, newValue)}
                renderInput={(params) => <TextField {...params} label="Search" variant="outlined" onChange={onInputChange}/>}
            />
            <div className='weather-view'>
                <ToastContainer position="top-center" hideProgressBar={true} autoClose={false} closeOnClick rtl={false} draggable closeButton={CloseButton}/>
                <div className='weather-view-header'>
                    <div className='title'>{currentLocation ? currentLocation.LocalizedName : null}<img className='weather-icon' src={currentWeather ? `${process.env.PUBLIC_URL}/weatherIcons/${currentWeather[0].WeatherIcon}.png`: null}/></div>
                    <Tooltip title={favoritesButtonText} arrow>
                        <div className='add-to-favorites-btn' onClick={onAddToFavoritesClicked}>{favoritesButtonIcon}</div>
                    </Tooltip>
                </div>
                <div className='current-weather-text'>{currentWeather ? `${currentWeather[0].WeatherText}` : null}
                    <span className='current-weather-temperature'>{currentWeather ? ` /${currentWeather[0].Temperature.Metric.Value}°C`: null}</span>
                </div>
                <div className='five-days-forecast-container'>
                    {fiveDayForecast ? renderFiveDays() : null}
                </div>
            </div>
        </div>
    );
}

export default HomeContainer;
