import React from 'react';
import './App.scss';
import Meal from './components/Meal';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import GeoPosition from "components/UI/Geoposition";

function App() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path='/add-meal'>
              <Meal/>
            </Route>
            <Route path='/map'>
              <GeoPosition/>
            </Route>
            <Redirect exact from="/" to="add-meal" />
          </Switch>
        </BrowserRouter>
    );
}

export default App;
