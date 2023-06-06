import { CountriesActionTypes } from 'constants/actionTypes';
import { Country } from 'model/Country';

interface CountriesState {
  data: Country[];
  error: string | null;
  loading: boolean;
}

interface CountriesAction {
  type: string;
  payload: unknown;
}

const initialState: CountriesState = {
  data: [],
  error: null,
  loading: false,
};

export const countriesReducer = (state = initialState, action: CountriesAction): CountriesState => {
  switch (action.type) {
    case CountriesActionTypes.GET_ALL_COUNTRIES:
      return { ...state, data: action.payload as Country[] };
    case CountriesActionTypes.GET_ALL_COUNTRIES_ERROR:
      return { ...state, error: action.payload as string | null };
    case CountriesActionTypes.GET_ALL_COUNTRIES_LOADING:
      return { ...state, loading: action.payload as boolean };
    default:
      return state;
  }
};
