import React from 'react';
import './user.css'

const User = ({imgSrc, name }) => {
    return (
        <>
        <figure className ="userFigure">
            <img className="userImg" src={imgSrc} alt="prize"/>
            <div className="userFigcaption"> 
             <h3 className="userFigcaptionName">{name} </h3>  
            </div>  
        </figure>
        </>
    );
}

 
export default User;