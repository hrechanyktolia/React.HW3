import React from 'react';
import EpisodesAll from "./EpisodesAll";



const Character = ({character:{name, gender, image, episode }}) => {
    return (
        <div className='character'>
            <h2 className='characterName'>{name}</h2>
            <p className='gender'>{gender}</p>
            <img className='characterImg' src={image} alt="logo"/>
            <div className='characterEpisode'>
                {episode.map(episode =>
                    <EpisodesAll episode={episode} key={Math.random()}/>
                    )}
            </div>
        </div>
    );
};

export default Character;