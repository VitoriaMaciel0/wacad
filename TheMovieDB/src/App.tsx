import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MovieDetails from './components/MovieDetails';
import { GetPopularMovies, Movie } from './services/movie.service';
import FilmeCurtido from './components/FilmeCurtidos';
import MovieModal from './components/MovieModal';
import FilmeComedia from './components/FilmeComedia';
import FilmeAcao from './components/FilmeAção';
import FilmeAventura from './components/FilmeAventura';
import FilmeRomance from './components/FilmeRomance';
import FavoriteMovies from './components/FilmeFavoritos';

function App() {
  // Estado para armazenar os filmes populares
  const [popularMovies, setPopularMovies] = useState<Movie[] | null>(null);

  // Estado para armazenar o ID do filme selecionado
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  // Efeito para buscar os filmes populares ao montar o componente
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const movies = await GetPopularMovies();
        setPopularMovies(movies.results);
      } catch (error) {
        console.error('Erro ao obter filmes populares:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  // Manipulador de clique para filmes populares
  const handleMovieClick = (movieId: number) => {
    setSelectedMovieId(movieId);
  };

  // Manipulador de clique para objetos Movie
  const handleMovieObjectClick = (movie: Movie) => {
    // Fazer algo com o objeto do filme, se necessário
    console.log('Filme clicado:', movie);
    setSelectedMovieId(movie.id); // Se desejar armazenar apenas o ID, ajuste conforme necessário
  };

  return (
    <Container>
      <h2>Filmes Populares</h2>

      {/* Mapeia os filmes populares e exibe informações básicas */}
      {popularMovies?.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
          <img
            style={{ width: 50 }}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.original_title}
          />
          {movie.original_title}
        </div>
      ))}

      {/* Componente MovieDetails para exibir detalhes do filme selecionado */}
      <MovieDetails
        movieId={selectedMovieId || 0}
        showModal={!!selectedMovieId}
        handleClose={() => setSelectedMovieId(null)}
      />

      {/* Componente FilmeCurtido atualizado para aceitar um objeto Movie no onMovieClick */}
      <FilmeCurtido category={'Filmes curtidos'} onMovieClick={handleMovieObjectClick} />

      {/* Outros componentes para diferentes categorias de filmes */}
      <FilmeComedia category={'Filmes de Comédia'} onMovieClick={handleMovieObjectClick} />
      <FilmeAcao category={'Filmes de Ação'} onMovieClick={handleMovieObjectClick} />
      <FilmeAventura category={'Filmes de Aventura'} onMovieClick={handleMovieObjectClick} />
      <FavoriteMovies onMovieClick={handleMovieObjectClick} />
      <FilmeRomance category={'Filmes de Romance'} onMovieClick={handleMovieObjectClick} />

      {/* Componente MovieModal para exibir detalhes e opções para o filme selecionado */}
      <MovieModal movieId={selectedMovieId || 0} showModal={!!selectedMovieId} handleClose={() => setSelectedMovieId(null)} />
    </Container>
  );
}

export default App;
