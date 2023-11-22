// components/FilmeCurtidos.tsx

import React, { useState, useEffect } from 'react';
import { GetFilmeCurtidos, Movie as MovieFromService } from '../services/movie.service';

// Definindo as propriedades que o componente FilmeCurtido aceitará
interface MovieGroupProps {
  category: string; // Categoria do grupo de filmes (por exemplo, "Filmes Curtidos")
  onMovieClick: (movie: MovieFromService) => void; // Função chamada quando um filme é clicado
}

// Definindo o componente FilmeCurtido como uma função de componente React
const FilmeCurtido: React.FC<MovieGroupProps> = ({ category, onMovieClick }) => {
  // Estado para armazenar a lista de filmes mais curtidos
  const [movies, setMovies] = useState<MovieFromService[]>([]);

  // Efeito colateral que é executado após o componente ser montado
  useEffect(() => {
    // Função assíncrona para buscar filmes mais curtidos
    const fetchMovies = async () => {
      try {
        // Chama a função GetFilmeCurtidos do serviço para obter os filmes mais curtidos
        const response = await GetFilmeCurtidos();

        // Atualiza o estado com a lista de filmes mais curtidos da resposta
        setMovies(response.results);
      } catch (error) {
        console.error('Erro ao buscar filmes mais curtidos:', error);
      }
    };

    // Chama a função fetchMovies quando a categoria muda
    fetchMovies();
  }, [category]); // Dependência do efeito colateral - se category mudar, o efeito será reexecutado

  // Renderiza o componente FilmeCurtido
  return (
    <div>
      {/* Exibe o título da categoria */}
      <h2>{category}</h2>
      
      {/* Lista os filmes mais curtidos */}
      <div className="movie-group">
        {movies.map((movie) => (
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

// Exporta o componente FilmeCurtido
export default FilmeCurtido;
