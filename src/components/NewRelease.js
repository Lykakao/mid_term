import React from 'react';
import AnimeItem from './AnimeItem';

const NewRelease = ({ animeList, setSelectedAnime }) => {
  return (
    <div className="new-release">
      <h2>New Release</h2>
      <div className="anime-list">
        {animeList.map((anime) => (
          <AnimeItem key={anime.id} anime={anime} setSelectedAnime={setSelectedAnime} />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;