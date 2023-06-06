import { store } from 'redux/store';

export const getAllProvinces = (selectedCountryIndex: number) => {
  return store.getState().countriesReducer.data[selectedCountryIndex];
};
