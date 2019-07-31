import React from 'react';
import Jumbotron from './Jumbotron';
import Jumbotron2 from './Jumbotron2';
import NavBar2 from './NavBar2';
import JigSaw from './JigSaw';
import {InfoGroup, Info} from './InfoGroup';
import TestimonialGroup from './TestimonialGroup';
import References from './References';
import Features from './Features';


const Home = () => {
  return (

    <div className="App">

      <NavBar2 image="img/gameCode.gif"/>

      <Jumbotron img="img/gaming-wallpaper.jpg"/>
      
      <Features img="img/Features.jpg"/>

      <TestimonialGroup image="img/Testimonials.jpg"/>

      <Jumbotron2 img="img/dice.jpg"/>

      
      <References image="img/References.jpg"/>


    </div>
  )
}

export default Home;