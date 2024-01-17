const MovieList = ({ movies, onMovieClick }) => {
    return (
        <ul className="movie-list">
            {movies.map((movie) => (
                <li key={movie.id} onClick={() => onMovieClick(movie)} className="movie-item">
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-status">{movie.status}</div>
                    <div className="movie-year">Año de lanzmiento: {movie.year}</div>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;