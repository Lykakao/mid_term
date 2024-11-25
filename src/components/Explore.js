import React from 'react';

const Explore = ({ selectedAnime }) => {
  if (!selectedAnime) {
    return <div className="explore"><h2>Explore</h2><p>What are you gonna watch today?</p></div>;
  }

  return (
    <div className="explore">
      <h2>{selectedAnime.movieName}</h2>
      <p>{selectedAnime.description}</p>
      <img
        alt={selectedAnime.movieName}
        height="400"
        src={selectedAnime.image}
        width="800"
      />
    </div>
  );
};

export default Explore;