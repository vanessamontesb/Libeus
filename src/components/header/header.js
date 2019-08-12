import React from 'react';
import './header.css';



const Header =props =>{
  return (
    <div>
            <header className="App-Header">
              
               <div>{props.nameApp}</div>
             
               
            </header>
          </div>
  )
}

export default Header;