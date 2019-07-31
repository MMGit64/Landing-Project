import React,{useState, setState} from 'react';
import Button from './Button';

const Query = (prop) => {
  const [register, setRegistered] = useState(false);
  const registerUser = () => {
    setRegistered(true);
  }
    return (
      <div className="Jumbotron jumbotron" style={{backgroundImage: `url('${prop.img}')`}} id='query'>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-xl-7 mx-auto">
                  <h1>Enter your details below with your queries and we will get back to you.</h1>
                  <div className="form-row align-items-center">
                      <div className="col">
                        <input className="form-control" type="text" placeholder="Enter your name"/>
                        <input className="form-control" type="text" placeholder="Enter your email"/>
                        <input className="form-control" type="text" placeholder="Enter your message"/>
                      </div>
                      <div className="col-auto">
                        <Button clickFunction={registerUser}>Send</Button>
                      </div>
                  </div>
                  <br/>
                  {register && <div style={{color:'white'}} className="alert alert-succes">Message sent!<br/>Thank you for your queries.<br/>You will hear from us shortly!</div>}
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Query;