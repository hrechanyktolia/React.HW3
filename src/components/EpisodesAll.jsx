import React from 'react';

const EpisodesAll = ({episode:{name, air_date}}) => {
    return (
        <ul type= 'disc'>
            <li className='list'>
                <span>{name}</span>
                {air_date}
            </li>
        </ul>
    );
};

export default EpisodesAll;