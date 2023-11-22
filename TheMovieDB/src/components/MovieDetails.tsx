// COMPONENTS/MOVIEDETAILS//
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { GetMovieDetails, MovieDetails as MovieDetailsType } from '../services/movie.details.service';

// Define as propriedades que o componente MovieDetails aceitará
interface MovieDetailsProps {
  movieId: number; // ID do filme para buscar detalhes
  showModal: boolean; // Indica se o modal deve ser exibido
  handleClose: () => void; // Função chamada ao fechar o modal
}

// Define a estrutura esperada dos detalhes de um filme
export interface MovieDetails {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
  overview: string;
  // Adicione outras propriedades conforme necessário
}

// Define o componente MovieDetails como uma função de componente React
const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId, showModal, handleClose }) => {
  // Estado para armazenar os detalhes do filme
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(null);

  // Efeito colateral que é executado após o componente ser montado ou quando movieId é alterado
  useEffect(() => {
    // Função assíncrona para buscar os detalhes do filme
    async function fetchDetails() {
      try {
        // Chama o serviço GetMovieDetails para obter os detalhes do filme
        const details = await GetMovieDetails(movieId);
        // Atualiza o estado com os detalhes do filme
        setMovieDetails(details);
      } catch (error) {
        // Exibe um erro no console se houver problemas ao obter detalhes do filme
        console.error('Erro ao obter detalhes do filme:', error);
        // Adicione um tratamento de erro aqui, como exibir uma mensagem ao usuário
      }
    }

    // Chama a função fetchDetails quando o componente é montado ou quando movieId é alterado
    fetchDetails();
  }, [movieId]);

  // Renderiza o componente MovieDetails
  return (
    <Modal show={showModal} onHide={handleClose}>
      {/* Cabeçalho do modal com o botão de fechar e o título do filme */}
      <Modal.Header closeButton>
        <Modal.Title>{movieDetails?.original_title}</Modal.Title>
      </Modal.Header>
      
      {/* Corpo do modal com os detalhes do filme */}
      <Modal.Body>
        {movieDetails && (
          <>
            {/* Imagem do filme com largura de 200 pixels */}
            <img
              style={{ width: 200 }}
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
            />
            {/* Avaliação do filme */}
            <p>Avaliação: {movieDetails.vote_average}</p>
            {/* Popularidade do filme */}
            <p>Popularidade: {movieDetails.popularity}</p>
            {/* Descrição do filme */}
            <p>Descrição: {movieDetails.overview}</p>
            {}
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

// Exporta o componente MovieDetails
export default MovieDetails;
