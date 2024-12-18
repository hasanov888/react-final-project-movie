import React from "react";

function Card({ movie, setList, basket }) {
  return (
    <div className="movie-card-container">
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
        alt={`${movie.title} Poster`}
        className="movie-poster"
      />
      <div className="movie-card-content">
        <div className="movie-details">
          <span className="release-year">{movie.release_date.slice(0, 4)}</span>
          <p className="movie-title">{movie.title}</p>
        </div>
        <div className="card-actions">
          <button
            className="add-to-list-button"
            onClick={() =>
              setList((prev) => {
                if (
                  !prev.some((item) => item.id === movie.id) &&
                  basket.length === 0
                ) {
                  return [...prev, movie];
                } else {
                  alert("Already at the list");
                  return prev;
                }
              })
            }
          >
            Siyahıya əlavə edin
          </button>
        </div>
      </div>
    </div>

  );
}

export default Card;
