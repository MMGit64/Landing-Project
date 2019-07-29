import React from 'react';

const Hero = () => {
    return(
        <div className = 'Hero'>
        <div className="container container-fluid">
        <div className="row align-items-start"style={{display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
         <div className= "col-lg-5">
          <img src={require("./HeroImage3.jpg")} width="420" height ="310" alt="Hero image3"/>
         </div>
         <div className= "col-lg-3">
          <img src={require("./HeroImage.gif")} width="470" height="310" alt="Hero image"/>
         </div>
         <div className= "col-lg-4">
          <img src= {require("./HeroImage2.jpg")} width="450" height = "310" alt="Hero image2"/>
         </div>
        </div>
      </div>
      </div>
    )
}   

export default Hero;