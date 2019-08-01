import React,{useContext} from 'react';
import NavBar4 from './NavBar4';
import Query from './Query';
import References from './References';
import RegisterLogin from './RegisterLogin';
import { AppContext } from './App';


const Contacts = () => {

    const [state, setState] = useContext(AppContext)

    return(
        <div className="Contacts">
            <NavBar4 image="img/gameCode.gif" />
            <Query img="img/contact.jpg"/>
            <References image="img/References.jpg"/>
            {state.signUpForm && <RegisterLogin />}
        </div>
    )
}


export default Contacts;