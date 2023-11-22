// components/MoviePopulares.tsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieGroupProps {
  category: string;
  onMovieClick: (movie: Movie) => void;
}

const MovieGroup: React.FC<MovieGroupProps> = ({ category, onMovieClick }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get(`/movie/${category}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <div className="movie-group">
        {movies.map((movie) => (
          // Exibir informações básicas do filme (pôster e nome)
          <div key={movie.id} onClick={() => onMovieClick(movie)}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGroup;
