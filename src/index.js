import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { render } from 'react-dom'
import weather from "./redux/reducers/weather";
import thunk from "redux-thunk";

const store = createStore(weather, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
