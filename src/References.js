import React from 'react';
import {Link} from 'react-router-dom';


export const References = (prop) => {

    return(
        <div className="References navbar-light bg-light static-top"style={{backgroundImage: `url('${prop.image}')` }} id="contact">
          <div className="ref-links container">
            <Link className="link" to="/contacts">FAQ</Link>
            <Link className="link" to="/termsOfUse">Terms Of Use</Link>
            <Link className="link" to="/privacyPolicy">Privacy Policy</Link>
            <i className='icon fab fa-facebook'></i>
            <i className='icon fab fa-twitter-square'></i>
            <i className='icon fab fa-instagram'></i>
            <i className='icon fab fa-google-plus'></i>
          </div>
          <div className="ref-links container">
            <div className="row-align-start">
              <div className="col copyright">
                <p className="text small mb-4 mb-lg-0" style={{fontSize:"blue"}}>&copy;FWG Free World Gaming 2019. All Rights Reserved.</p>
              </div>
            </div>
            <div className="row-align-start">
              <div className="col images">
                <img src={require("./HeroImage3.jpg")}width="105" height ="75"/>
                <img src={require("./HeroImage.gif")}width="105" height ="75"/>
                <img src={require("./HeroImage2.jpg")}width="105" height ="75"/>
              </div>
            </div>
          </div>
        </div>
      )
}


export default References;