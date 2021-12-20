import React from 'react';
import { string, shape } from 'prop-types';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

export default function Movie(props) {
  const { movie } = props;
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>
        (
        {movie.Year}
        )
      </p>
    </div>
  );
}

Movie.propTypes = {
  movie: shape({
    Poster: string,
    Title: string,
    Year: string,
  }).isRequired,
};
