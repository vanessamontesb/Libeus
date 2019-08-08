import React from 'react';
//import PropTypes from 'prop-types'
import './footer.css';


const Footer =props =>{
  return (
    <div className="Footer">
            <header className="App-Footer">
              
               <p>{props.copyright}</p>
             
               
            </header>
          </div>
  )
}

export default Footer;