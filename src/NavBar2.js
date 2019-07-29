import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';


const NavBar2 = (prop) => {

    const [register, setRegistered] = useState(false);
    const registerUser = () => {
      setRegistered(true); 
    }

    return(
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style={{backgroundImage: `url('${prop.image}')`}} >
<div class="container">
<h2 href="#page-top" className="logo js-scroll-trigger">
            <img src={require("./HeroImage3.jpg")}width="105" height ="75"/>
            <img src={require("./HeroImage.gif")}width="105" height ="75"/>
            <img src={require("./HeroImage2.jpg")}width="105" height ="75"/>
            Free World Gaming</h2>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    Menu
    <i class="fas fa-bars"></i>
  </button>
  <div class="collapse navbar-collapse show" id="navbarResponsive">
    <div class="navbar-nav ml-auto">
      <div class="nav-item">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#register">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#testimonial">Testimonials</a>
          </li>         
           <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
         <Link  className="link js-scroll-trigger" to="/">Home</Link>
          <Link className="link js-scroll-trigger" to="/about">About</Link>
          <Link className="link js-scroll-trigger" to="/contacts">Contacts</Link>
          <Button clickFunction={registerUser} className="button">Sign in</Button>
      </div>
      <br/>
          {register && <div style={{color:'blue'}}className="alert alert-succes js-scroll-trigger">Successfully Signed In! Welcome Back!</div>}
    </div>
  </div>
</div>
</nav>
    )
}

export default NavBar2;