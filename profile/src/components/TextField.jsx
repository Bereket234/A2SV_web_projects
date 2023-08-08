import React from 'react';

function TextField({name, description, email, website}) {
    return (
        <div className='textbox'>
            <p className='name'>{name}</p>
            <a href={email} className='email'> {email}</a>
            {website && <p className='description'> {description}</p>}
            <p className='description'> {description}</p>
        </div>
    );
}

export default TextField;