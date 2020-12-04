import React from 'react';
import SpaceHistory from './components/SpaceHistory';
import SpacePayloads from './components/SpacePayloads';
import Home from './pages/Home';
import Header from './components/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const RouterData = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path = "/payloads" component = {SpacePayloads} />
                <Route path = "/history" component = {SpaceHistory} />
                <Route exact path = "/" component = {Home} />
            </Switch>
        </Router>
    )
}

export default RouterData;