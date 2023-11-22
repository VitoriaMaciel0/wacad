// components/FilmeRomance.tsx
import React, { useState, useEffect } from 'react';
import { GetRomanceMovies, Movie as MovieFromService } from '../services/movie.service';

interface MovieGroupProps {
  category: string;
  onMovieClick: (movie: MovieFromService) => void;
}

const FilmeRomance: React.FC<MovieGroupProps> = ({ category, onMovieClick }) => {
  const [movies, setMovies] = useState<MovieFromService[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await GetRomanceMovies();
        setMovies(response.results);
      } catch (error) {
        console.error('Erro ao buscar filmes de romance:', error);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <div className="movie-group">
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => onMovieClick(movie)}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmeRomance;
