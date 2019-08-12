import React from 'react';
import './user.css'
import Header from '../header/header';

const User = ({imgSrc, name, namesfollowers,title}) => {
    return (
        <>
        <figure className ="userFigure">
            <img className="userImg" src={imgSrc} alt="prize"/>
            <div className="userFigcaption"> 
             <h3 className="userFigcaptionName">{name} </h3>  
            </div> 
        </figure>
        <header>
             {title}
        </header>
        <div>
            
            {namesfollowers}
        </div>
        </>
    );
}

 
export default User;