import React from 'react';

const TestimonialGroup = () => {
    return (
        <section className="Testimonials text-center bg-light" id='testimonial'>
        <div className="container">
          <h2 className="heading"><strong>What our partners are saying!</strong></h2>
          <p className="sub-heading"><strong>Available on all tablets &amp; mobile device! Sign up now for free!</strong></p>
          <div className="row"style={{display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid fa-twitter-square mb-3"  src={require("./Apple.png")} alt=""/>
                <br/><a className="badge-apple" href="#"><img src={require("./iosstore.svg")}/></a>
                <h5 style= {{color:'white', webkitTextStrokeWidth:'0.5px', webkitTextStrokeColor:'black', fontSize: '20pt'}}>IOS Games</h5>
                <p className="caption" style={{color:'black', webkitTextStrokeWidth:'1.0px', webkitTextStrokeColor:'white', fontSize: '15pt'}}><strong>"Free World Gaming is the ultimate online gaming platform!"</strong></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={'img/Android.png'} alt=""/>
                <a className="badge-google" href="#"><img src={require("./googlebadge.png")}/></a>
                <h5 style={{ color:'white', webkitTextStrokeWidth:'0.5px', webkitTextStrokeColor:'black', fontSize:'20pt'}}>Google Play</h5>
                <p className="caption" style={{color:'black', webkitTextStrokeWidth:'1.0px', webkitTextStrokeColor:'white',fontSize: '15pt'}}><strong>"The scope of competetive gaming has never seen such transcedance as that of Free World Gaming."</strong></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid"  src={require("./galaxy.png")} alt=""/>
                <a className="badge-samsung" href="#"><img src={require("./samsung.png")}/></a>
                <h5 style={{color:'white', webkitTextStrokeWidth:'1.0px', webkitTextStrokeColor:'black', fontSize: '20pt'}}>Galaxy Store</h5>
                <p className="caption" style={{color:'black', webkitTextStrokeWidth:'1.0px', webkitTextStrokeColor:'white', fontSize:'15pt'}}><strong>"The first site/app to come to mind upon recommendation to online gamers."</strong></p>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}



export default TestimonialGroup;