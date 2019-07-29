import React, {useState} from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';

const NavBar = (prop) => {
  const [register, setRegistered] = useState(false);
  const registerUser = () => {
    setRegistered(true); 
  }
    return(
      <div className="NavBar navbar navbar-light bg-light static-top"style={{backgroundImage: `url('${prop.image}')`}}>
        <div className="nav-links container">
          <h2 className="logo js-scroll-trigger">
            <img src={require("./HeroImage3.jpg")}width="105" height ="75"/>
            <img src={require("./HeroImage.gif")}width="105" height ="75"/>
            <img src={require("./HeroImage2.jpg")}width="105" height ="75"/>
            Free World Gaming</h2>
          <Link  className="link js-scroll-trigger" to="/">Home</Link>
          <Link className="link js-scroll-trigger" to="/about">About</Link>
          <Link className="link js-scroll-trigger" to="/contacts">Contacts</Link>
          <Button clickFunction={registerUser} className="button">Sign in</Button>
          <br/>
          {register && <div style={{color:'blue'}}className="alert alert-succes js-scroll-trigger">Successfully Signed In! Welcome Back!</div>}
        </div>
      </div>
    )
}

export default NavBar;