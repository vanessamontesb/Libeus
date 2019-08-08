import React from 'react';


const User = ({imgSrc, name }) => {
    return (
        <>
        <figure className ="userFigure">
            <img className="userImg" src={imgSrc} alt="prize"/>
            <h3 className="userFigcaptionName">{name} </h3>    
            <figcaption className="prizeFigcaption"> <span role="img" aria-label="star"></span></figcaption>  
        </figure>
        </>
    );
}
 
export default User;