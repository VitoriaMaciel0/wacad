// movie.service.ts
import { instance } from "../utils/http";

// Define a estrutura de resposta da API The Movie DB
export interface TheMovieDB {
  page: number;
  results: Movie[];
}

// Define a estrutura de um filme
export interface Movie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Chave de API obtida do ambiente
const apiKey = import.meta.env.VITE_API_KEY;

// Obtém os filmes populares
export async function GetPopularMovies(): Promise<TheMovieDB> {
  try {
    const result = await instance.http.get(`/movie/popular?language=pt-BR&page=1&api_key=${apiKey}`);
    return result.data;
  } catch (error) {
    console.error('Erro ao obter filmes populares:', error);
    throw error;
  }
}

// Obtém os filmes mais bem avaliados
export async function GetTopRatedMovies(): Promise<TheMovieDB> {
  try {
    const result = await instance.http.get(`/movie/top_rated?language=pt-BR&page=1&api_key=${apiKey}`);
    return result.data;
  } catch (error) {
    console.error('Erro ao obter filmes mais bem avaliados:', error);
    throw error;
  }
}

// Obtém os filmes mais curtidos
export async function GetFilmeCurtidos(): Promise<TheMovieDB> {
  try {
    const result = await instance.http.get(`/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`);
    return result.data;
  } catch (error) {
    console.error('Erro ao obter filmes curtidos:', error);
    throw error;
  }
}

// Obtém os filmes de comédia
export async function GetComedyMovies(): Promise<TheMovieDB> {
  try {
    const result = await instance.http.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35&api_key=${apiKey}`);
    return result.data;
  } catch (error) {
    console.error('Erro ao obter filmes de comédia:', error);
    throw error;
  }
}

// Obtém os filmes de ação
export async function GetActionMovies(): Promise<TheMovieDB> {
  try {
    const result = await instance.http.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&api_key=${apiKey}`);
    return result.data;
  } catch (error) {
    console.error('Erro ao obter filmes de ação:', error);
    throw error;
  }
}

// Obtém os filmes de aventura
export async function GetAdventureMovies(): Promise<TheMovieDB> {
  try {
    const result = await instance.http.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12&api_key=${apiKey}`);
    return result.data;
  } catch (error) {
    console.error('Erro ao obter filmes de aventura:', error);
    throw error;
  }
}

// Obtém os filmes de romance
export async function GetRomanceMovies(): Promise<TheMovieDB> {
  try {
    const result = await instance.http.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749&api_key=${apiKey}`);
    return result.data;
  } catch (error) {
    console.error('Erro ao obter filmes de romance:', error);
    throw error;
  }
}

// Obtém recomendações para um filme específico
export async function GetRecommendations(movieId: number): Promise<TheMovieDB> {
  try {
    const result = await instance.http.get(`/movie/${movieId}/recommendations?api_key=${apiKey}`);
    return result.data;
  } catch (error) {
    console.error('Erro ao obter recomendações:', error);
    throw error;
  }
}
