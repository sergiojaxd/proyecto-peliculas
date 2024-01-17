import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieDetailsModal from './MovieDetails';
import moviesDate from './Moviesdate';
import categoriesDate from './CategoriesDate';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(moviesDate);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSerchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortType, setSortType] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
    setMovies((prevMovies) =>
      prevMovies.map((m) => (m.id === movie.id ? { ...m, status: 'visto' } : m))
    );
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortType === 'title') {
      return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else if (sortType === 'year') {
      return sortOrder === 'asc' ? a.year - b.year : b.year - a.year;
    }
    return 0;
  });

  const filteredMovies = sortedMovies
    .filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((movie) => !selectedCategory || movie.categories.includes(selectedCategory));

  return (
    <div>
      <h1 className='title'>Catalogo de Peliculas</h1>
      <div className='filter-container'>
        <input
          type='text'
          placeholder='Buscar peliculas'
          value={searchTerm}
          onChange={(e) => setSerchTerm(e.target.value)}
          className="search-bar"
        />
        <div className='label-container'>
          <label>
            Ordenar por:
            <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
              <option value={"title"}>Titulo</option>
              <option value={"year"}>Año</option>
            </select>
          </label>
          <label>
            Orden:
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value={"asc"}>Ascendente</option>
              <option value={"desc"}>Descendente</option>
            </select>
          </label>
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categoriesDate.map((category, index) => (
            <option key={index} value={category}>
              {category || 'Todas las categorias'}
            </option>
          ))}
        </select>
      </div>


      <MovieList movies={filteredMovies} onMovieClick={openMovieDetails} />
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={closeMovieDetails}
        />
      )}
    </div>
  );
};

export default App;
