import React,{useState} from 'react';
import Button from './Button';
import SignUpButton from './SignUpButton';

const Jumbotron2 = (prop) => {

  const loggedIn = localStorage.getItem('userToken');

    return (
    <section className="Jumbotron2" style={{backgroundImage:`url('${prop.img}')`}}>
      <div className="content">
        <div className="container">
          <h2 className="heading">Ready to dive in? <br/>Register now!</h2>
          <div className="form-row align-items-center">
            <div className="col"> 
              { !loggedIn &&<SignUpButton className ="btn btn-primary link">Lets Get Started!</SignUpButton> }
            </div>
          </div>       
        </div>
      </div>
      <div className="overlay"></div>
  </section>
    )
  }

export default Jumbotron2;