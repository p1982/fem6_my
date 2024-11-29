import React from 'react';

const PostItem = ({src, title, shortDescription}) =>{
    
const imgStyles = {
    maxWidth: "30%",
    height: "auto"
}

    return(
        <div>
            <img src={src} alt="" style={imgStyles}/>
            <h4>{title}</h4>
            <p>{shortDescription}</p>
        </div>
        
    )
}

export default PostItem