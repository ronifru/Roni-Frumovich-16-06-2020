import React from "react";
import {useSelector} from "react-redux";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import "./FavoritesContainer.scss"

function FavoritesContainer(){
    const favorites = useSelector(state => state.favorites)

    function renderFavorites() {
        return favorites.map(favorite => <FavoriteCard favorite={favorite}/>)
    }

    return (
      <div className='favorites-container'>
          {renderFavorites()}
      </div>
    );
}

export default FavoritesContainer;