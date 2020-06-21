import React from "react";
import {useSelector} from "react-redux";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import "./FavoritesContainer.scss"

function FavoritesContainer(){
    const favorites = useSelector(state => state.favorites)

    function renderFavorites() {
        return favorites.map(favorite => <FavoriteCard favorite={favorite}/>)
    }
    let favoritesComponents = renderFavorites();
    return (
      <div className='favorites-container'>
          {favoritesComponents.length != 0 ? favoritesComponents : <div className='no-favorites-message'>No  Saved Favorites</div>}
      </div>
    );
}

export default FavoritesContainer;