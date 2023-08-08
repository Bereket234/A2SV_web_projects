import React from 'react';
import './style.css'


function Avatar({image}) {
    return (
        <div className='image__container'>
         <img className='image' src={image} />
        </div>
    );
}

export default Avatar;