import React from 'react';

export const Info = (prop) => {
    return(
      <div className='Info' >
        <i className={prop.iconClass}></i>
        <h3 style={{fontSize:'23pt', color:'blue'}} className="title">{prop.title}</h3>
        <p style={{fontSize:'17pt', color:"aqua", webkitTextStrokeWidth:"0.5px", webkitTextStrokeColor:"black"}} className="caption"><strong>{prop.caption}</strong></p>
      </div>
    )
}
  
export const InfoGroup = (prop) => {
    return(
        <div className="InfoGroup container-fluid bg-light"style={{backgroundImage: `url('${prop.img}')`}}>
          <div className="container">
              {prop.children}
          </div>
        </div>
    )
}


export default InfoGroup;