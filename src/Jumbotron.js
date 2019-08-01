import React,{useState, setState} from 'react';
import SignUpButton from './SignUpButton';

const Jumbotron = (prop) => {

  const loggedIn = localStorage.getItem('userToken');
  
    return (
      <div className="Jumbotron jumbotron" style={{backgroundImage: `url('${prop.img}')`}} id='register'>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-xl-7 mx-auto">
                  <h1>Start Playing Online With Free World Gaming</h1>
                  <div className="form-row align-items-center">
                      <div className="col">
                      </div>
                      <div className="col-auto">
                        { !loggedIn &&<SignUpButton className ="btn btn-primary link">Sign up!</SignUpButton> }
                        {}
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Jumbotron;