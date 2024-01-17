const MovieDetailsModal = ({ movie, onClose, showCategories}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-description">{movie.description}</p>
            <p className="movie-year">Año de lanzamiento: {movie.year}</p>
            {showCategories && <p className="movie-categories">Categorias: ...</p>}
            <button className="close-button" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default MovieDetailsModal;