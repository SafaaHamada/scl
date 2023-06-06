import { citiesApi } from 'api/cities';

export const getAllCountriesService = async () => {
  const response = await citiesApi.get('/api/v0.1/countries');
  return response;
};
