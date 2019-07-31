import React from 'react';

const Information = (prop) => {

    return (
      <div className="Jumbotron jumbotron" style={{backgroundImage: `url('${prop.img}')`}} id='#'>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-xl-7 mx-auto">
                  <h1>At Free World Games, founded 2019</h1>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Information;