import React from 'react';
import Episode from "./Episode";
import {mainEpisodes} from "../data/EpisodesList";



const Episodes = ({episodes = mainEpisodes}) => {
    return (
        <div className='episodes'>
            {episodes.map(episode =>
                <Episode episode = {episode} key={Math.random()}/>
            )}
        </div>
    );
};


export default Episodes;