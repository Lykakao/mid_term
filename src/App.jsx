import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Explore />
      <NewRelease />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Anonime</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">List anime</a>
      </nav>
      <input className="search-bar" placeholder="Search anime or movie" type="text" />
    </header>
  );
};

const Explore = () => {
  return (
    <div className="explore">
      <h2>Explore</h2>
      <p>What are you gonna watch today?</p>
      <div className="featured">
        <img
          alt="Anime characters from 'Weather With You'"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/HUttXXzZXGoVOhTmpeGlCcSPBnwej1y0xxjX7UHRMMXTFj0TA.jpg"
          width="800"
        />
        <div className="overlay">
          <h3>Weather With You</h3>
          <p>
            Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize
            the thin veneer of peace between neighboring countries Ostania and Westalis.
          </p>
        </div>
      </div>
    </div>
  );
};

const NewRelease = () => {
  const animeList = [
    {
      title: 'One Piece',
      episode: 'Episode 1018',
      imgSrc: 'https://storage.googleapis.com/a1aa/image/44IKBtnce9WxfkHvxYjngdxfdaWyIieA72hADkrcu9yhUMSPB.jpg',
    },
    {
      title: 'Boruto Naruto Next Generations',
      episode: 'Episode 250',
      imgSrc: 'https://storage.googleapis.com/a1aa/image/p5djRjh4dMbZHV84btW7Og9H0BMTpDQP0MMu32Hvy8mSxI9E.jpg',
    },
    {
      title: 'Spy X Family',
      episode: 'Episode 07',
      imgSrc: 'https://storage.googleapis.com/a1aa/image/R1vqCwWTG66eaq5xl7e8llJeA1SHPLIaHfIvJTOvD0RvUMSPB.jpg',
    },
    {
      title: 'Shingeki no Kyojin',
      episode: 'Episode 28',
      imgSrc: 'https://storage.googleapis.com/a1aa/image/1r9AxyQB306mMhrJUwhfaffkDyuSSBLmXjhKOmc3Fc2kKGpnA.jpg',
    },
    {
      title: 'Captain Tsubasa',
      episode: 'Episode 28',
      imgSrc: 'https://storage.googleapis.com/a1aa/image/SUXemf5b1tjsM0EM56Gaf73wSsfm4KyALgyzegG1ehxgTxI9E.jpg',
    },
    {
      title: 'Aoashi',
      episode: 'Episode 28',
      imgSrc: 'https://storage.googleapis.com/a1aa/image/JhvvQEnGUMYnEp3rzMNzbCzRBASBufZqz4HcDNJ3CAXoiR6JA.jpg',
    },
  ];

  return (
    <div className="new-release">
      <h2>New Release</h2>
      <div className="anime-list">
        {animeList.map((anime, index) => (
          <AnimeItem key={index} anime={anime} />
        ))}
      </div>
    </div>
  );
};

const AnimeItem = ({ anime }) => {
  return (
    <div className="anime-item">
      <img alt={`${anime.title} cover`} height="200" src={anime.imgSrc} width="150" />
      <p className="episode">{anime.episode}</p>
      <p className="title">{anime.title}</p>
    </div>
  );
};

export default App;