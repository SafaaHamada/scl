import { AppDispatch } from 'redux/store';
import { CountriesActionTypes } from 'constants/actionTypes';
import { getAllCountriesService } from 'services/getAllCitiesService';

export const getAllCountries = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: CountriesActionTypes.GET_ALL_COUNTRIES_LOADING, payload: true });
    const response = await getAllCountriesService();
    dispatch({ type: CountriesActionTypes.GET_ALL_COUNTRIES, payload: response.data.data });
  } catch (error) {
    dispatch({ type: CountriesActionTypes.GET_ALL_COUNTRIES_ERROR, payload: error });
  } finally {
    dispatch({ type: CountriesActionTypes.GET_ALL_COUNTRIES_LOADING, payload: false });
  }
};
