import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';


const NavBar4 = (prop) => {

    const [register, setRegistered] = useState(false);
    const registerUser = () => {
      setRegistered(true); 
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style={{backgroundImage: `url('${prop.image}')`}} >
<div className="container">
<h2 href="#page-top" classNameName="logo js-scroll-trigger">
            <img src={"img/HeroImage3.jpg"} width="105" height ="75"/>
            <img src={"img/HeroImage.gif"} width="105" height ="75"/>
            <img src={"img/HeroImage2.jpg"} width="105" height ="75"/>
            Free World Gaming</h2>
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    Menu
    <i className="fas fa-bars"></i>
  </button>
  <div className="collapse navbar-collapse show" id="navbarResponsive">
    <div className="navbar-nav ml-auto">
      <div className="nav-item">
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#query">Query</a>
          </li>         
           <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
          <Link  classNameName="link js-scroll-trigger" to="/">Home</Link>
          <Link classNameName="link js-scroll-trigger" to="/about">About</Link>
          <Link classNameName="link js-scroll-trigger" to="/contacts">Contacts</Link>
          <Button clickFunction={registerUser} classNameName="button">Sign in</Button>
      </div>
      <br/>
          {register && <div style={{color:'blue'}}classNameName="alert alert-succes js-scroll-trigger">Successfully Signed In! Welcome Back!</div>}
    </div>
  </div>
</div>
</nav>
    )
}

export default NavBar4;