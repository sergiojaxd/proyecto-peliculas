const MovieList = ({ movies, onMovieClick }) => {
    return (
        <ul className="movie-list">
            {movies.map((movie) => (
                <li key={movie.id} onClick={() => onMovieClick(movie)} className="movie-item">
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-status">{movie.status}</div>
                    <div className="movie-year">Año de lanzamiento: {movie.year}</div>
                    <div className="movie-generes">Géneros: {movie.categories.join(', ')}</div>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;