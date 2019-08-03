import React, {useContext} from 'react';
import NavBar2 from './NavBar2';
import RegisterLogin from './RegisterLogin';
import FeedMedia from './FeedMedia';
import { AppContext } from './App'
import References from './References';

const Feeds = () => {

    const [state, setState] = useContext(AppContext)

    return (
        <div className="Feeds">
            <NavBar2 image="img/gameCode.gif"/>
            <div className="container">
                <h1>The Feeds Page</h1>
                <FeedMedia />
            </div>
            <References image="img/References.jpg"/>
            {state.signUpForm && <RegisterLogin />}
        </div>
    )
}

export default Feeds;