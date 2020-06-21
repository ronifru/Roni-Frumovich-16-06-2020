import React, {useState} from 'react';
import './App.scss';
import HomeContainer from './components/HomeContainer/HomeCotainer';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import FavoritesContainer from "./components/FavoritesContainer/FavoritesContainer";
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {changeView} from "./redux/actions";

function App() {

    const currentView = useSelector(state => state.activeView);
    const dispatch = useDispatch();

    function onViewChange(event, selectedView){
        dispatch(changeView(selectedView));
    }

  return (
      <Router>
        <div className="app">
            <div className='main-header'>
                <div className='app-title-and-icon'>
                    <img className='app-icon' src={`${process.env.PUBLIC_URL}/app-icon.png`}/>
                    <div className='app-title'>HEROLO WEATHER APP</div>
                </div>
                <ToggleButtonGroup className='nav-btns' exclusive onChange={(event, selectedView)=>onViewChange(event, selectedView)}>
                    <ToggleButton value="home" selected={currentView === "home"}>
                        <Link className="toggle-btn" to="/"><HomeIcon/></Link>
                    </ToggleButton>
                    <ToggleButton value="favorites" selected={currentView === "favorites"}>
                        <Link className="toggle-btn" to="/Favorites"><FavoriteIcon/></Link>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='view-container'>
            <Switch>
                <Route path="/Favorites">
                    <FavoritesContainer />
                </Route>
                <Route path="/">
                    <HomeContainer />
                </Route>
            </Switch>
            </div>
        </div>
      </Router>
  );
}

export default App;