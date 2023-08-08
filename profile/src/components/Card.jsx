import React from 'react';
import Avatar from './Avatar';
import TextField from './TextField';
import './style.css'

function Card({user}) {
    const {name, image, description, email}= user
    return (
        <div className='card'>
            <Avatar image= {image}/>
            <TextField name= {name} description= {description} email= {email} />    
        </div>
    );
}

export default Card;