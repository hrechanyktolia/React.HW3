import React from 'react';

const CharactersAll = ({character: {name}}) => {
    return (
        <ul type='disc'>
            <li className='list'>{name}</li>
        </ul>
    );
};

export default CharactersAll;