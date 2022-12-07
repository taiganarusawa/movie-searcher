import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }, props) => {

  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
        <div classname="overlay">
          add to favourite
        </div>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;