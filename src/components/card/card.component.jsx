import React from 'react';

import './card.styles.css';

export const Card = (props) => (
<div className='card-container'>
    <img 
        alt='monster'
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.id}. {props.monster.name} "{props.monster.username}"</h2>
    <p>{props.monster.email}</p>
</div>
);

/* IMPORTANT:
    src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    ` is not apostrophe next to zero key, it is grave accent next to P key

*/