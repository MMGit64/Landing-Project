import React from 'react';
import Button from './Button';


// Note:
// Use 'useContext' if outside JSX
// use 'AppContext.Consumer' if inside JSX

const LogOutButton = (prop) => {

    const logOutUser = () => {
        localStorage.clear()
    }

    
    return (
        <Button clickFunction={logOutUser} className="link">{prop.children}</Button>
    )
}

export default LogOutButton;