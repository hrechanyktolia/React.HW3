import React from 'react';
import CharactersAll from "./CharactersAll";

const Episode = ({episode: {name, air_date, characters}} ) => {
    return (
        <div className= 'episode'>
            <h2 className='episodeName'>{name}</h2>
            <p className= 'airDate'>{air_date}</p>
            <div className='episodeCharacters'>
                {characters.map(character =>
                    <CharactersAll character={character} key={Math.random()}/>
                )}
            </div>


        </div>
    );
};

export default Episode;