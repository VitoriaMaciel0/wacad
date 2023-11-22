// services/api.ts
import axios from 'axios';

const API_KEY = 'acaafd71de214abf724595bf0e050e95'; //Minha chave API

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export default api;
