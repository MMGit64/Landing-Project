import React from 'react';


const Features = (prop) => {
    return (   
    <section className="features" id="features" style={{backgroundImage: `url('${prop.img}')`}}>
    <div className="container">
      <div className="section-heading text-center">
        <h2 classname="head">Accomodating As Many Users As Possible</h2>
        <p className="headline">Check out the list of features below!</p>
        <hr/>
      </div>
      <div className="row">
        <div className="col-lg-4 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  <img src={require("./Joystick.png")} width='500'/>
                </div>
                <div className="button">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon icon-screen-smartphone text-primary"></i>
                  <h3 className="icon-header">Device Mockups</h3>
                  <p className="icon-caption">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon icon-globe text-primary"></i>
                  <h3 className="icon-header">Top Competition</h3>
                  <p className="icon-caption">Compete against the best online gamers from around the world and build your reputation!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon icon-grid text-primary"></i>
                  <h3 className="icon-header">Complete Variety</h3>
                  <p className="icon-caption">Compete in any kind of genre of game! First-person or third-person? War or fantasy? All of them? Your choice, your domain!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon icon-lock-open text-primary"></i>
                  <h3 className="icon-header">Free Registration</h3>
                  <p className="icon-caption">Available for all gamers! Experience always over cost.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Features;