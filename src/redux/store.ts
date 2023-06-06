import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { countriesReducer } from './reducers/countriesReducer';
import { getUsersReducer } from './reducers/getUsersReducer';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  countriesReducer,
  userReducer,
  getUsersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, undefined, Action<string>>;

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
