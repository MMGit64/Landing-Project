import React,{useState} from 'react';


 const Button = (prop) => {
    return (
      <button className={`btn btn-primary ${prop.className}`} onClick={prop.clickFunction}>{prop.children}</button>
    )
}

export default Button;