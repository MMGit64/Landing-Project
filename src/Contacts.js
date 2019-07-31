import React from 'react';
import NavBar4 from './NavBar4';
import Query from './Query';
import References from './References';


const Contacts = () => {
    return(
        <div className="Contacts">
            <NavBar4 image="img/gameCode.gif" />
            <Query img="img/contact.jpg"/>
            <References image="img/References.jpg"/>
        </div>
    )
}


export default Contacts;