import React,{useState, setState} from 'react';
import Button from './Button';

const Jumbotron = (prop) => {
  const [register, setRegistered] = useState(false);
  const registerUser = () => {
    setRegistered(true);
  }
    return (
      <div className="Jumbotron jumbotron" style={{backgroundImage: `url('${prop.img}')`}} id='register'>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-xl-7 mx-auto">
                  <h1>Start Playing Online With Free World Gaming</h1>
                  <div className="form-row align-items-center">
                      <div className="col">
                        <input className="form-control" type="text" placeholder="Enter your name"/>
                        <input className="form-control" type="text" placeholder="Enter your email"/>
                        <input className="form-control" type="text" placeholder="Enter your password"/>
                      </div>
                      <div className="col-auto">
                        <Button clickFunction={registerUser}>Sign up!</Button>
                      </div>
                  </div>
                  <br/>
                  {register && <div style={{color:'white'}} className="alert alert-succes">Congratulations! Successfully Registered!</div>}
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Jumbotron;