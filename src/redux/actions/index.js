import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as responses from "../../responses";

const url = 'https://dataservice.accuweather.com/';
//const apikey = 'hAeyfJTj2Wf6wNYPqjRJkbyHACHAOfUH';
//const apikey = 'Ba9VuPRBgWhHB7J4wQhtnAai5sosoTOP';

//delete this apikey
const apikey='kSZfDL3Ikfj4DKCR31Uz3nQFap1mG9xU';

function autoCompleteAction(responseData){
    return {type: actionTypes.ON_AUTOCOMPLETE_SUCCESS, data: responseData};
};

function onRequestFailedAction(){
    return {type: actionTypes.ON_REQUEST_FAILED};
};


function getCurrentWeatherAction(responseData){
    return {type: actionTypes.ON_GET_CURRENT_WEATHER_SUCCESS, data: responseData};
};

function getFiveDayForecastAction(responseData){
    return {type: actionTypes.ON_GET_FIVE_DAY_FORECAST_SUCCESS, data: responseData};
};

export function autoCompleteRequest(text){
    return function (dispatch){
        console.log('in dispatch')
        //return dispatch(autoCompleteAction(responses.autoCompleteRes));
        return axios.get(`${url}locations/v1/cities/autocomplete`, {
            params: {
                apikey: apikey,
                q: text
            }}).then(response => dispatch(autoCompleteAction(response.data)))
            .catch(error => {dispatch(onRequestFailedAction())});
     }
};

export function getCurrentWeather(locationKey){
    return function(dispatch){
        //return  dispatch(getCurrentWeatherAction(responses.currentWeatherResponse));
        return axios.get(`${url}currentconditions/v1/${locationKey}`, {
            params: {
                apikey: apikey,
            }}).then(response => dispatch(getCurrentWeatherAction(response.data)))
            .catch(error => {dispatch(onRequestFailedAction())});
     }
};

export function getFiveDayForecast(locationKey){
    return function(dispatch){
       // return dispatch(getFiveDayForecastAction(responses.fiveDayForecastResponse));
        return axios.get(`${url}forecasts/v1/daily/5day/${locationKey}`, {
            params: {
                apikey: apikey,
                metric: true,
            }}).then(response => dispatch(getFiveDayForecastAction(response.data)))
            .catch(error => {dispatch(onRequestFailedAction())});
    };
};

export function addToFavorites(selectedLocation){
    return function(dispatch){
        return dispatch({type: actionTypes.ON_ADD_TO_FAVORITES, data: selectedLocation});
    };
};

export function removeFromFavorites(selectedLocation){
    return function(dispatch){
        return dispatch({type: actionTypes.ON_REMOVE_FROM_FAVORITES, data: selectedLocation});
    };
};

export function changeCurrentLocation(location){
    return function(dispatch){
        return dispatch({type: actionTypes.CHANGE_CURRENT_LOCATION, data: location});
    }
};

export function changeView(viewName){
    return function(dispatch){
        return dispatch({type: actionTypes.CHANGE_VIEW, data:viewName});
    }
};

export function clearError(){
    return function(dispatch){
        console.log('in clear')
        return dispatch({type: actionTypes.CLEAR_ERROR});
    }
};