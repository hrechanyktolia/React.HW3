import React from 'react';
import Character from "./Character";
import {mainCharacters} from "../data/CharactersList";



const Characters = ({characters = mainCharacters}) => {
    return (
        <div className='characters'>
            {characters.map(character =>
                <Character character = {character} key= {Math.random()}/>
                )}

        </div>
    );
};

export default Characters;