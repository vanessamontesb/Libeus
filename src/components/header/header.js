import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './header.css';
import {Link} from 'react-router-dom'


const Header =props =>{
  return (
    <div>
            <header className="App-Header">
              
               <p>{props.nameApp}</p>
             
               
            </header>
          </div>
  )
}

export default Header;