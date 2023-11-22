// components/FavoriteMovies.tsx

import React, { useEffect, useState } from 'react';
import { GetRecommendations, Movie as MovieFromService } from '../services/movie.service';

// Definindo as propriedades que o componente FavoriteMovies aceitará
interface FavoriteMoviesProps {
  onMovieClick: (movie: MovieFromService) => void; // Função chamada quando um filme é clicado
}

// Definindo o componente FavoriteMovies como uma função de componente React
const FavoriteMovies: React.FC<FavoriteMoviesProps> = ({ onMovieClick }) => {
  // Estado para armazenar a lista de filmes favoritos e suas recomendações
  const [favorites, setFavorites] = useState<MovieFromService[]>([]);

  // Efeito colateral que é executado após o componente ser montado
  useEffect(() => {
    // Função assíncrona para buscar filmes favoritos e suas recomendações
    const fetchFavorites = async () => {
      // Recupera os favoritos do localStorage
      const favorites = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');

      // Para cada filme favorito, obtenha recomendações
      const recommendationsList = await Promise.all(
        favorites.map(async (fav: MovieFromService) => {
          const recommendations = await GetRecommendations(fav.id);
          return recommendations.results;
        })
      );

      // Flatten a lista de recomendações
      const recommendations = recommendationsList.reduce((acc, recs) => [...acc, ...recs], []);

      // Atualiza o estado com a lista de filmes favoritos e suas recomendações
      setFavorites(recommendations);
    };

    // Chama a função fetchFavorites quando o componente é montado
    fetchFavorites();
  }, []);

  // Renderiza o componente FavoriteMovies
  return (
    <div>
      {/* Exibe o título da seção */}
      <h2>Favoritos e Recomendações</h2>
      
      {/* Lista os filmes favoritos e suas recomendações */}
      <div className="movie-group">
        {favorites.map((movie) => (
          // Cria um item para cada filme, definindo a função onMovieClick como manipulador de clique
          <div key={movie.id} onClick={() => onMovieClick(movie)}>
            {/* Exibe a imagem do filme */}
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            {/* Exibe o título do filme */}
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporta o componente FavoriteMovies
export default FavoriteMovies;
