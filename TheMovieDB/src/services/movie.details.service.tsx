// Importa a instância de axios configurada
import { instance } from "../utils/http";

// Define a estrutura dos detalhes de um filme e dos gêneros
export interface MovieDetails {
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

// Obtém as detalhes de um filme pelo ID
export async function GetMovieDetails(idMovie: number): Promise<MovieDetails> {
  // Faz a requisição à API TMDB usando a instância configurada de axios
  const result = await instance.http.get(
    `/movie/${idMovie}?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`
  );

  // Retorna os detalhes do filme obtidos da API
  return result.data;
}

