import React, { useState, createContext } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from'./About';
import Contacts from './Contacts';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfuse from './TermsOfUse';
import FAQ from './FAQ';
import './App.css';                                                                       //short for exact={true}
                                                                        //exact ensures specific link to Home page


export const AppContext = createContext();

const App = () => {

    const [state, setState] = useState({ signUpForm: false });

    return (
        <AppContext.Provider value={[state, setState]}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>            
                    <Route path="/about" component={About}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/privacypolicy" component={PrivacyPolicy}/>
                    <Route path="/termsofuse" component={TermsOfuse}/>
                    <Route path="/faq" component={FAQ}/>
                </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;