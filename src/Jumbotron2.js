import React,{useState} from 'react';
import Button from './Button';

const Jumbotron2 = (prop) => {

    const [register, setRegistered] = useState(false);
    const registerUser = () => {
      setRegistered(true);
    }
    return (
    <section className="Jumbotron2" style={{backgroundImage:`url('${prop.img}')`}}>
      <div className="content">
        <div className="container">
          <h2 className="heading">Ready to dive in? <br/>Register now!</h2>
          <div className="form-row align-items-center">
            <div className="col"> 
              <Button href="#contact" clickFunction={registerUser} className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</Button>
              <input classNameName="form-control" type="text" placeholder="Enter your name"/>
              <input classNameName="form-control" type="text" placeholder="Enter your email"/>
              <input classNameName="form-control" type="text" placeholder="Enter your password"/>
            </div>
          </div>       
        </div>
        <br/>
          {register && <div style={{color:'white'}} className="alert alert-succes">Congratulations! Successfully Registered!</div>}
      </div>
      <div className="overlay"></div>
  </section>
    )
  }

export default Jumbotron2;