import axios from 'axios';
import * as actionTypes from './actionTypes';

const url = 'https://dataservice.accuweather.com/';
const apikey='hAeyfJTj2Wf6wNYPqjRJkbyHACHAOfUH';

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
        return axios.get(`${url}currentconditions/v1/${locationKey}`, {
            params: {
                apikey: apikey,
            }}).then(response => dispatch(getCurrentWeatherAction(response.data)))
            .catch(error => {dispatch(onRequestFailedAction())});
      }
};

export function getFiveDayForecast(locationKey){
    return function(dispatch){
        return axios.get(`${url}forecasts/v1/daily/5day/${locationKey}`, {
            params: {
                apikey: apikey,
                metric: true,
            }}).then(response => dispatch(getFiveDayForecastAction(response.data)))
            .catch(error => {dispatch(onRequestFailedAction())});
    };
};

export function addToFavorites(favorite){
    return function(dispatch){
        return dispatch({type: actionTypes.ON_ADD_TO_FAVORITES, data: {favorite}});
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
        return dispatch({type: actionTypes.CLEAR_ERROR});
    }
};