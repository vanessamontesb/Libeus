import React from 'react';
import './user.css'

const User = ({imgSrc, name,title}) => {
    return (
        <>
        <figure className ="userFigure">
            <img className="userImg" src={imgSrc} alt="prize"/>
            <div className="userFigcaption"> 
             <h3 className="userFigcaptionName">{name} </h3>  
            </div> 
        </figure>
        <header className ="header">
             <h2>{title}</h2>
        </header>
        </>
    );
}

 
export default User;