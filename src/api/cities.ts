import axios from 'axios';

export const citiesApi = axios.create({
  baseURL: 'https://countriesnow.space',
});
