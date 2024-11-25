import React from 'react';

const AnimeItem = ({ anime, setSelectedAnime }) => {
  return (
    <div className="anime-item" onClick={() => setSelectedAnime(anime)}>
      <img alt={`${anime.movieName} cover`} height="200" src={anime.image} width="150" />
      <p className="episode">{anime.episode}</p>
      <p className="title">{anime.movieName}</p>
    </div>
  );
};

export default AnimeItem;