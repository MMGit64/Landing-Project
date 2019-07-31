import React from 'react';

const TestimonialGroup = (prop) => {
    return (
        <section className="Testimonials text-center bg-light" id='testimonial'style={{backgroundImage: `url('${prop.image}')`}} >
        <div className="container">
          <h2 className="heading"><strong>What our partners are saying!</strong></h2>
          <p className="sub-heading"><strong>Available on all tablets &amp; mobile device! Sign up now for free!</strong></p>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid fa-twitter-square mb-3"  src={"img/Apple.png"} alt=""/>
                <br/><a className="badge-apple" href="#"><img src={"img/iosstore.svg"}/></a>
                <h5 className="title">IOS Games</h5>
                <p className="caption"><strong>"Free World Gaming is the ultimate online gaming platform!"</strong></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={'img/Android.png'} alt=""/>
                <br/><a className="badge-google" href="#"><img src={"img/googlebadge.png"}/></a>
                <h5 className="title">Google Play</h5>
                <p className="caption"><strong>"The scope of competetive gaming has never seen such transcedance as that of Free World Gaming."</strong></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid fa-twitter-square mb-3"  src={"img/galaxy.png"} alt=""/>
                <br/><a className="badge-samsung" href="#"><img src={"img/samsung.png"}/></a>
                <h5 className="title" >Galaxy Store</h5>
                <p className="caption"><strong>"The first site/app to come to mind upon recommendation to online gamers."</strong></p>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}



export default TestimonialGroup;