import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from'./About';
import Contacts from './Contacts';
import './App.css';
                                                                        //short for exact={true}
                                                                        //exact ensures specific link to Home page
const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>            
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
        </Switch>
        </BrowserRouter>
    )
}

export default App;