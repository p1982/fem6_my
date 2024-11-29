import React from 'react';

const Content = ({text, imgSrc}) => {
    const textContent = text.map(item =>
    <p className="content-text">{item}</p>)
    return (
        <div className="main-content">
            <div className="main-content-img">
               <img className="main-img" src={imgSrc}/> 
            </div>
            {textContent}
        </div>
    )
}

export default Content;