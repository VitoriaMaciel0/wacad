// components/MovieModal.tsx
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import api from '../services/api';

// Define as propriedades que o componente MovieModal aceitará
interface MovieModalProps {
  movieId: number; // ID do filme para buscar detalhes
  showModal: boolean; // Indica se o modal deve ser exibido
  handleClose: () => void; // Função chamada ao fechar o modal
}

// Define a estrutura esperada dos detalhes de um filme
interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  overview: string;
  tagline: string;
  release_date: string;
  runtime: number;
  genres: string[];
  revenue: number;
  imdb_id: string;
}

// Define o componente MovieModal como uma função de componente React
const MovieModal: React.FC<MovieModalProps> = ({ movieId, showModal, handleClose }) => {
  // Estado para armazenar os detalhes do filme
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  // Estado para controlar se o filme está nos favoritos
  const [isFavorite, setIsFavorite] = useState(false);

  // Efeito colateral que é executado após o componente ser montado ou quando movieId é alterado
  useEffect(() => {
    // Função assíncrona para buscar os detalhes do filme
    const fetchMovieDetails = async () => {
      try {
        // Chama o serviço da API para obter os detalhes do filme com base no ID
        const response = await api.get(`/movie/${movieId}`);
        // Atualiza o estado com os detalhes do filme
        setMovieDetails(response.data);

        // Verifica se o filme está nos favoritos
        const favorites = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
        setIsFavorite(favorites.some((fav: MovieDetails) => fav.id === movieId));
      } catch (error) {
        // Exibe um erro no console se houver problemas ao obter detalhes do filme
        console.error('Erro ao buscar detalhes do filme:', error);
      }
    };

    // Chama a função fetchMovieDetails quando o componente é montado ou quando movieId é alterado
    if (showModal) {
      fetchMovieDetails();
    }
  }, [movieId, showModal]);

  // Função para lidar com a adição do filme aos favoritos
  const handleAddToFavorites = () => {
    // Recupera os favoritos do localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');

    // Verifica se o filme já está nos favoritos
    const isAlreadyFavorite = favorites.some((fav: MovieDetails) => fav.id === movieId);

    // Adiciona o filme aos favoritos se ainda não estiver na lista
    if (!isAlreadyFavorite) {
      favorites.push(movieDetails);
      localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  // Renderiza o componente MovieModal
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      {movieDetails && (
        <>
          {/* Cabeçalho do modal com o botão de fechar e o título do filme */}
          <Modal.Header closeButton>
            <Modal.Title>{movieDetails.title}</Modal.Title>
          </Modal.Header>
          
          {/* Corpo do modal com os detalhes do filme */}
          <Modal.Body>
            {/* Imagem do filme */}
            <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt={movieDetails.title} />
            {/* Avaliação do filme e total de avaliações */}
            <p>Avaliação: {movieDetails.vote_average} (Total de avaliações: {movieDetails.vote_count})</p>
            {/* Popularidade do filme */}
            <p>Popularidade: {movieDetails.popularity}</p>
            {/* Descrição do filme */}
            <p>Descrição: {movieDetails.overview}</p>
            {/* Tagline do filme */}
            <p>Tagline: {movieDetails.tagline}</p>
            {/* Data de lançamento do filme */}
            <p>Data de Lançamento: {movieDetails.release_date}</p>
            {/* Duração do filme em minutos */}
            <p>Duração: {movieDetails.runtime} minutos</p>
            {/* Gêneros do filme */}
            <p>Gêneros: {movieDetails.genres.join(', ')}</p>
            {/* Receita do filme */}
            <p>Receita: {movieDetails.revenue}</p>
            {/* IMDb ID do filme */}
            <p>IMDb ID: {movieDetails.imdb_id}</p>
            {/* Botão para adicionar aos favoritos, desativado se já estiver nos favoritos */}
            <button onClick={handleAddToFavorites} disabled={isFavorite}>
              {isFavorite ? 'Já Adicionado aos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

// Exporta o componente MovieModal
export default MovieModal;
