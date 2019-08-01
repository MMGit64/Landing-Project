import React from 'react';

const Information = (prop) => {

    return (
      <div className="Jumbotron jumbotron" style={{backgroundImage: `url('${prop.img}')`}} id='#'>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-xl-7 mx-auto">
                  <h1>Founded in 2019, Free World Gaming is the largest online gaming platform.
                  <br/><br/>Check out our primary features below!</h1>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Information;