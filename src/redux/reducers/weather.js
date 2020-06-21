import * as actionTypes from '../actions/actionTypes';

const weather = (state={favorites: [], activeView: "home"}, action) => {
    switch(action.type) {
        case actionTypes.ON_AUTOCOMPLETE_SUCCESS:
            return {...state, locationOptions: action.data};
        case actionTypes.ON_REQUEST_FAILED:
            console.log('ON_AUTOCOMPLETE_ERROR')
            return {...state, error: true}
        case actionTypes.CLEAR_ERROR:
            console.log('ON_AUTOCOMPLETE_ERROR_CLEAR')
            return {...state, error: false}
        case actionTypes.ON_GET_CURRENT_WEATHER_SUCCESS:
            return {...state, currentWeather: action.data};
        case actionTypes.ON_GET_FIVE_DAY_FORECAST_SUCCESS:
            return {...state, fiveDayForecast: action.data};
        case actionTypes.ON_ADD_TO_FAVORITES:
            let FavoritesWithNewSelection = state.favorites.push(action.data);
            return {...state, FavoritesWithNewSelection};
        case actionTypes.ON_REMOVE_FROM_FAVORITES:
            let FavoritesWithoutNewSelection = state.favorites.filter(favorite => favorite.LocalizedName != action.data.LocalizedName)
            return {...state, favorites: FavoritesWithoutNewSelection};
        case actionTypes.CHANGE_CURRENT_LOCATION:
            return {...state, currentLocation: action.data};
        case actionTypes.CHANGE_VIEW:
            return {...state, activeView:action.data};
        default:
            return state;
    }
}

export default weather;