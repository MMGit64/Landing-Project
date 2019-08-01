import React, { useContext } from 'react';
import Jumbotron from './Jumbotron';
import Jumbotron2 from './Jumbotron2';
import NavBar2 from './NavBar2';
import RegisterLogin from './RegisterLogin';
//import {InfoGroup, Info} from './InfoGroup';
import TestimonialGroup from './TestimonialGroup';
import References from './References';
import Features from './Features';
import { AppContext } from './App';


const Home = () => {

  const [state, setState] = useContext(AppContext)

  return (

    <div className="Home">

      <NavBar2 image="img/gameCode.gif"/>

      <Jumbotron img="img/gaming-wallpaper.jpg"/>
      
      <Features img="img/Features.jpg"/>

      <TestimonialGroup image="img/Testimonials.jpg"/>

      <Jumbotron2 img="img/dice.jpg"/>

      <References image="img/References.jpg"/>

      {state.signUpForm && <RegisterLogin />}

    </div>
  )
}

export default Home;